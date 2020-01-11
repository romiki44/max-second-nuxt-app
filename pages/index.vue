<template>
  <div class="home-page">
    <section class="intro">
      <h1>Get the latest tech news!</h1>
    </section>
    <section class="featured-posts">
      <post-preview 
        id='1'
        thumbnail="https://priorityconsultants.com/wp-content/uploads/2019/07/priorityconsultants.com%20-%202019-07-12_04-23-42_578902.jpg"
        title="Post Title 1"
        previewText="Preview Text 1"/>
      <post-preview 
        id='2'
        thumbnail="https://4533x635aus61yamnx2wkfwe-wpengine.netdna-ssl.com/wp-content/uploads/2019/12/shutterstock_578441974-898x505.jpg"
        title="Post Title 2"
        previewText="Preview Text 2"/>
      <post-preview 
        id='3'
        thumbnail="https://miro.medium.com/max/2625/1*BqPFaq9z3IpcN6m8qrJE3Q.jpeg"
        title="Post Title 3"
        previewText="Preview Text 3"/>
    </section>
  </div>
</template>

<script>
import PostPreview from './../components/Posts/PostPreview'
export default {
  components: {
    PostPreview
  }
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

.featured-posts {
  display: flex;
  padding: 20px;
  box-sizing: border-box;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
}

</style>
