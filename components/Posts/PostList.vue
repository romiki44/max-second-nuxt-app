<template>
  <section class="post-list">
      <post-preview 
        id='1'
        :is-admin="isAdmin"
        thumbnail="https://priorityconsultants.com/wp-content/uploads/2019/07/priorityconsultants.com%20-%202019-07-12_04-23-42_578902.jpg"
        title="Post Title 1"
        previewText="Preview Text 1"/>
      <post-preview 
        id='2'
        :is-admin="isAdmin"
        thumbnail="https://4533x635aus61yamnx2wkfwe-wpengine.netdna-ssl.com/wp-content/uploads/2019/12/shutterstock_578441974-898x505.jpg"
        title="Post Title 2"
        previewText="Preview Text 2"/>
      <post-preview 
        id='3'
        :is-admin="isAdmin"
        thumbnail="https://miro.medium.com/max/2625/1*BqPFaq9z3IpcN6m8qrJE3Q.jpeg"
        title="Post Title 3"
        previewText="Preview Text 3"/>
    </section>
</template>

<script>
import PostPreview from '@/components/Posts/PostPreview'
export default {
  components: {
    PostPreview
  },
  props: {
    isAdmin: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style scoped>
.post-list {
  display: flex;
  padding: 20px;
  box-sizing: border-box;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
}
</style>