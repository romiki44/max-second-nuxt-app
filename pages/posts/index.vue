<template>
  <div class="posts-page">
    <PostList :posts="loadedPosts"/>
  </div>
</template>

<script>
import PostList from '@/components/Posts/PostList';
export default {
  components: {
    PostList
  },
  // created() {
  //   this.$store.dispatch('setPosts', this.loadedPosts);
  // }
  middleware: 'log',
  computed: {
    loadedPosts() {
      console.log('from store.../posts', this.$store.getters.loadedPosts);
      return this.$store.getters.loadedPosts;
    }
  }
}
</script>

<style scoped>
.posts-page {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>