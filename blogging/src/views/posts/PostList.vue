<template>

  <section>
    <PostCreate />
    
    <!-- <button @click="getPosts">Get Posts</button> -->
    
  </section>
</template>

<script>
import PostCreate from "./PostCreate.vue";

export default {
  name: "PostList",
  components: {
    PostCreate,
  },
  methods: {
    async getPosts() {
      const response = await fetch("http://localhost:3000/posts");
      const data = await response.json();
      console.log(data);
    }
  }
};
</script>

<style scoped>
div {
  display: flex;
  justify-content: space-around;
}
</style>
