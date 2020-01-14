<template>
  <div class="single-post-page">
    <section class="post">
      <h1 class="post-title">{{loadedPost.title}}</h1>
      <div class="post-details">
        <div class="post-detail">last updated on {{loadedPost.updatedDate}}</div>
        <div class="post-detail">Writen by {{loadedPost.author}}</div>
      </div>
      <p class="post-content">{{loadedPost.content}}</p>
    </section>
    <section class="post-feedback">
      <p>Let me know waht you think about the post, send a email to <a href="mailto:feedback@mail.com">feedback@mail.com</a></p>
    </section>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  asyncData(context) {
    const url='https://ng-http-01-start.firebaseio.com/nuxt2/posts/'+context.params.id+'.json';
    console.log('asyncData on post (/posts/:id) with url', url);
    return axios.get(url)
      .then(res=>{
        return {
          loadedPost: res.data
        }
      })
      .catch(e=>{
        console.log('error',e);
        context.error(e);
      });
  }
}
</script>

<style scoped>
.single-post-page {
  padding: 30px;
  text-align: center;
  box-sizing: border-box;
}

.post {
  width: 100%;
}

@media (min-width: 768px) {
  .post {
    width: 600px;
    margin: auto;
  }
}

.post-title {
  margin: 0;
}

.post-details {
  padding: 10px;
  box-sizing: border-box;
  border-bottom: 3px solid #ccc;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

@media (min-width: 768px) {
  .post-details {
    flex-direction: row;
  }
}

.post-detail {
  color: rgb(88, 88, 88);
  margin: 0 10px;
}

.post-feedback a {
  color: red;
  text-decoration: none;
}

.post-feedback a:hover,
.post-feedback a:active {
  color: salmon;
}
</style>