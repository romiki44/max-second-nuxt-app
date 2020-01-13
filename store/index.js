import Vuex from 'vuex';

const createStore=()=> {
  return new Vuex.Store({
    state: {
      loadedPosts: []
    },
    mutations: {
      setPosts(state, posts) {
        state.loadedPosts=posts
      }
    },
    actions: {
      nuxtServerInit(vuexContext, context) {
        console.log('fetching posts');
        return new Promise((resolve, reject)=>{
          setTimeout(()=>{
            vuexContext.commit('setPosts', [
              {id: '1', title: 'Post 1', previewText: 'Content of post 1', thumbnail: 'https://www.simplilearn.com/ice9/free_resources_article_thumb/everything-you-need-to-know-about-iot-applications.jpg'},
              {id: '2', title: 'Post 2', previewText: 'Content of post 2', thumbnail: 'https://www.simplilearn.com/ice9/free_resources_article_thumb/everything-you-need-to-know-about-iot-applications.jpg'},
              {id: '3', title: 'Post 3', previewText: 'Content of post 3', thumbnail: 'https://www.simplilearn.com/ice9/free_resources_article_thumb/everything-you-need-to-know-about-iot-applications.jpg'}
            ])
            resolve();
          },1000);
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