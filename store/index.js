import Vuex from 'vuex';
import axios from 'axios';

const createStore=()=> {
  return new Vuex.Store({
    state: {
      loadedPosts: []
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
        const createdPost={
          ...post,
          updatedDate: new Date()
        };
        return axios.post('https://ng-http-01-start.firebaseio.com/nuxt2/posts.json', createdPost)
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
        const url='https://ng-http-01-start.firebaseio.com/nuxt2/posts/' +
                editedPost.id + '.json';
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
      }
    },
    getters: {
      loadedPosts(state) {
        return state.loadedPosts
      }
    }
  })
}

export default createStore;