import Vuex from 'vuex';
import axios from 'axios';
import Cookie from 'js-cookie';

const createStore=()=> {
  return new Vuex.Store({
    state: {
      loadedPosts: [],
      token: null
    },
    mutations: {
      setPosts(state, posts) {
        state.loadedPosts=posts
      },
      addPost(state, post) {
        state.loadedPosts.push(post);
      },
      editPost(state, editedPost) {
        const postIndex=state.loadedPosts.findIndex(post=>post.id==editedPost.id);
        state.loadedPosts[postIndex]=editedPost;
      },
      setToken(state, token) {
        state.token=token;
      },
      clearToken(state) {
        state.token=null;
      }
    },
    actions: {
      nuxtServerInit(vuexContext, context) {
        return axios.get('https://ng-http-01-start.firebaseio.com/nuxt2/posts.json')
          .then(res=>{
            const postArray=[];
            for(const key in res.data) {
              postArray.push({
                ...res.data[key],
                id: key
              })
            }
            vuexContext.commit('setPosts',postArray);
          })
          .catch(e=>context.error(e));
      },
      addPost(vuexContext, post) {
        //https://firebase.google.com/docs/database/rest/auth?authuser=0#authenticate_with_an_id_token
        //"https://<DATABASE_NAME>.firebaseio.com/users/ada/name.json?auth=<ID_TOKEN>"
        const createdPost={
          ...post,
          updatedDate: new Date()
        };
        const url='https://ng-http-01-start.firebaseio.com/nuxt2/posts.json?auth=' + 
                  vuexContext.state.token;
        return axios.post(url, createdPost)
        .then(result=>{
          //console.log(result);
          vuexContext.commit('addPost', {
            ...createdPost,
            id: result.data.name //firebase id after adding to db is here refreshed!
          });
        })
        .catch(e=>console.log(e));
      },
      editPost(vuexContext, editedPost) {
        // /https://firebase.google.com/docs/database/rest/auth?authuser=0#authenticate_with_an_id_token
        //"https://<DATABASE_NAME>.firebaseio.com/users/ada/name.json?auth=<ID_TOKEN>"
        const url='https://ng-http-01-start.firebaseio.com/nuxt2/posts/' +
                editedPost.id + '.json?auth='+ vuexContext.state.token;
        return axios.put(url, editedPost)
          .then(res=>{
            vuexContext.commit('editPost', editedPost);
          })
          .catch(e=>{
            console.log('error', e);
          });
      },
      setPosts(vuexContext, posts) {
        vuexContext.commit('setPosts', posts)
      },
      authenticateUser(vuexContext, authData) {
        let url='';
        //https://firebase.google.com/docs/reference/rest/auth?authuser=0#section-create-email-password
        if(!authData.isLogin) {
          url='https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=' + process.env.fbAPIKey;
        } else {
          url='https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key='+process.env.fbAPIKey;
        }
        return axios.post(url, {
            email: authData.email,
            password: authData.password,
            returnSecureToken: true
          }).then(result=>{
            console.log(result);
            vuexContext.commit('setToken', result.data.idToken);
            localStorage.setItem('token', result.data.idToken);
            localStorage.setItem('tokenExpiration', new Date().getTime()+ +result.data.expiresIn*1000)
            Cookie.set('jwt', result.data.idToken);
            Cookie.set('expirationDate', new Date().getTime() + +result.data.expiresIn*1000);
          }).catch(e=>{
            console.log(e);
          }
        );
      },
      initAuth(vuexContext, req) {
        let token='';
        let expirationDate=null;
        if(req) {
          if(!req.headers.cookie) {
            return;
          }
          const jwtCookie=req.headers.cookie
              .split(';')
              .find(c=>c.trim().startsWith('jwt='));
          if(!jwtCookie) {
            return;
          }
          token=jwtCookie.split('=')[1];
          expirationDate=req.headers.cookie
              .split(';')
              .find(c=>c.trim().startsWith('expirationDate='))
              .split('=')[1];
        } else {
          token=localStorage.getItem('token');
          expirationDate=localStorage.getItem('tokenExpiration');
        }
        if(new Date().getTime() > +expirationDate || !token) {
          console.log('No token or invalid token');
          vuexContext.dispatch('logout');
          //vuexContext.commit('clearToken');
          return;
        }
        vuexContext.commit('setToken', token);
      },    
      logout(vuexContext) {
        vuexContext.commit('clearToken');
        Cookie.remove('jwt');
        Cookie.remove('expirationDate');
        if(process.client) {
          localStorage.removeItem('token');
          localStorage.removeItem('tokenExpiration');
        }
      }
    },
    getters: {
      loadedPosts(state) {
        return state.loadedPosts;
      },
      isAuthenticated(state) {
        return state.token != null;
      }
    }
  })
}

export default createStore;