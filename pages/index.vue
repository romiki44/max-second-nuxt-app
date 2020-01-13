<template>
  <div class="home-page">
    <section class="intro">
      <h1>Get the latest tech news!</h1>
    </section>
    <PostList :posts="loadedPosts"/>
  </div>
</template>

<script>
import PostList from '@/components/Posts/PostList'
export default {
  components: {
    PostList
  },
  // bezi na serveri - callback deprecated!!
  // asyncData(context, callback) {
  //   console.log('async on root (/)');
  //   setTimeout(()=>{
  //     callback(null, {
  //       loadedPosts: [
  //         {id: '1', title: 'Post 1', previewText: 'Content of post 1', thumbnail: 'https://www.simplilearn.com/ice9/free_resources_article_thumb/everything-you-need-to-know-about-iot-applications.jpg'},
  //         {id: '2', title: 'Post 2', previewText: 'Content of post 2', thumbnail: 'https://www.simplilearn.com/ice9/free_resources_article_thumb/everything-you-need-to-know-about-iot-applications.jpg'},
  //         {id: '3', title: 'Post 3', previewText: 'Content of post 3', thumbnail: 'https://www.simplilearn.com/ice9/free_resources_article_thumb/everything-you-need-to-know-about-iot-applications.jpg'}
  //       ]
  //     });
  //   },1500);
  // }

  // bezi na serveri - Promise
  // asyncData(context) {
  //   console.log('asyncData on root (/)');
  //   return new Promise((resolve, reject)=>{
  //     setTimeout(()=>{
  //       resolve({
  //         loadedPosts: [
  //           {id: '1', title: 'Post 1', previewText: 'Content of post 1', thumbnail: 'https://www.simplilearn.com/ice9/free_resources_article_thumb/everything-you-need-to-know-about-iot-applications.jpg'},
  //           {id: '2', title: 'Post 2', previewText: 'Content of post 2', thumbnail: 'https://www.simplilearn.com/ice9/free_resources_article_thumb/everything-you-need-to-know-about-iot-applications.jpg'},
  //           {id: '3', title: 'Post 3', previewText: 'Content of post 3', thumbnail: 'https://www.simplilearn.com/ice9/free_resources_article_thumb/everything-you-need-to-know-about-iot-applications.jpg'}
  //         ]
  //       });
  //     },1000);
  //   })
  //   .then(data=>{
  //     return data;
  //   })
  //   .catch(e=>{
  //     context.error(new Error());
  //   })
  computed: {
    loadedPosts() {
      console.log('from store.../root', this.$store.getters.loadedPosts);
      return this.$store.getters.loadedPosts;
    }
  }

  //bezi na clientovi!!
  // data() {
  //   return {
  //     loadedPosts: []
  //   }
  // },
  // created() {
  //   setTimeout(()=>{
  //     this.loadedPosts= [
  //       {id: '1', title: 'Post 1', previewText: 'Content of post 1', thumbnail: 'https://www.simplilearn.com/ice9/free_resources_article_thumb/everything-you-need-to-know-about-iot-applications.jpg'},
  //       {id: '2', title: 'Post 2', previewText: 'Content of post 2', thumbnail: 'https://www.simplilearn.com/ice9/free_resources_article_thumb/everything-you-need-to-know-about-iot-applications.jpg'},
  //       {id: '3', title: 'Post 3', previewText: 'Content of post 3', thumbnail: 'https://www.simplilearn.com/ice9/free_resources_article_thumb/everything-you-need-to-know-about-iot-applications.jpg'}
  //     ]
  //   },1500);
  // }
}
</script>

<style scoped>
.intro {
  height: 300px;
  position: relative;
  padding: 30px;
  box-sizing: border-box;
  background-image: url('~assets/images/background.jpg');
  background-position: center;
  background-size: cover;
}

.intro h1 {
  position: absolute;
  top: 10%;
  left: 5%;
  width: 90%;
  font-size: 1.5rem;
  color: black;
  background-color: rgb(211, 211, 211);
  padding: 10px;
  border-radius: 10px;
  box-shadow: 3px 3px 3px black;
  box-sizing: border-box;
  border: 1px solid black;
}

@media (min-width: 768px) {
  .intro h1 {
    font-size: 2rem;
  }
}

</style>
