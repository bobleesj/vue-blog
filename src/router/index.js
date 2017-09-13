import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/Home'
import About from '../components/About'
import Blog from '../components/Blog'
import Team from '../components/Team'
import Upload from '../components/Upload'
import Course from '../components/Course'
import Login from '../components/Auth'
import Profile from '../components/Profile'

Vue.use(Router)

export default new Router({
  hashbang: false,
  mode: 'history',
  routes: [
    { path: '/', name: 'Home', component: Home },
    { path: '/about', name: 'About', component: About },
    { path: '/blog', name: 'Blog', component: Blog },
    { path: '/team', name: 'Team', component: Team },
    { path: '/upload', name: 'Upload', component: Upload },
    { path: '/course', name: 'Course', component: Course },
    { path: '/auth', name: 'Login', component: Login },
    { path: '/profile', name: 'Profile', component: Profile }
  ]
})
