import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue';
import About from '../views/About.vue'
import PostList from '../views/posts/PostList.vue'
// import PostCreate from '../views/posts/PostCreate.vue'
// import Register from '../views/user/Register.vue'

const routes = [
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/posts',
    name: 'PostList',
    component: PostList
  },
  // {
  //   path: '/post-create',
  //   name: 'PostCreate',
  //   component: PostCreate
  // }
    // {
  //   path: '/register',
  //   name: 'Register',
  //   component: Register
  // },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
