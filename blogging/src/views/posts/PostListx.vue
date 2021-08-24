<template>
  <section>
    <PostCreate @posted="getPosts" />

    <div>
      <ul>
        <li v-for="post of posts" :key="post._id">
            <router-link :to="{ name: 'PostDetail', params: {postId: post._id} }"> 
                <h3>{{post.title}}</h3> 
            </router-link>
            <p>by {{post.author}} on {{new Date (post.createdAt).toLocaleDateString("en-NZ") }}</p>
            </li>
       
      </ul>
    </div>
  </section>
</template>

<script>
import PostCreate from "./PostCreate.vue";

export default {
  name: "PostList",
  components: {
    PostCreate,
  },
  data() {
    return {
      posts: [],
    };
  },
  mounted() {
    this.getPosts();
  },
  methods: {
    async getPosts() {
      const response = await fetch("http://localhost:3000/posts");
      const data = await response.json();
      this.posts = data;
    },
  },
};
</script>

<style>
</style>