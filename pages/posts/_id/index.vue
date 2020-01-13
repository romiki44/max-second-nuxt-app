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
export default {
  // asyncData(context, callback) {
  //   setTimeout(()=>{
  //     callback(null, {
  //       loadedPost: {
  //         id: '1', 
  //         title: 'Post 1 (ID: '+context.route.params.id+')', 
  //         previewText: 'Content of post 1', 
  //         author: 'Max',
  //         updatedDate: new Date(),
  //         content: 'Some content 1',
  //         thumbnail: 'https://www.simplilearn.com/ice9/free_resources_article_thumb/everything-you-need-to-know-about-iot-applications.jpg'
  //       }
  //     })
  //   }, 1000);
  // }
  asyncData(context) {
    console.log('asyncData on post (/posts/:id)');
    return new Promise((resolve, reject)=>{
      setTimeout(()=>{
        resolve({
          loadedPost: {
            id: '1', 
            title: 'Post 1', 
            previewText: 'Content of post 1', 
            author: 'Max',
            updatedDate: new Date(),
            content: 'Some content 1',
            thumbnail: 'https://www.simplilearn.com/ice9/free_resources_article_thumb/everything-you-need-to-know-about-iot-applications.jpg'
            }
        });
      },1000);
    })
    .then(data=>{
      return data;
    })
    .catch(e=>{
      context.error(new Error());
    })
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