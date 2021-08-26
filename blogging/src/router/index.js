import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue';
import About from '../views/About.vue'
import PostList from '../views/posts/PostList.vue'
// import PostCreate from '../views/posts/PostCreate'
import Register from '../views/user/Register.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  },
  {
    path: '/posts',
    name: 'PostList',
    component: PostList
  }
  // {
  //   path: '/postCreate',
  //   name: 'PostCreate',
  //   component: PostCreate
  // }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
