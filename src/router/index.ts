import { createRouter, createWebHistory } from 'vue-router'
import AboutView from '../views/AboutView.vue'
import ProjectsView from '../views/ProjectsView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'about',
      component: AboutView
    },
    {
      path: '/projects',
      name: 'projects',
      component: ProjectsView
    },
    {
      path: '/notes',
      name: 'notes',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/NotesView.vue')
    },
    {
      path: '/notes/item01',
      name: 'item01',
      component: () => import('../views/notes/item01.vue')
    },
    {
      path: '/notes/item02',
      name: 'item02',
      component: () => import('../views/notes/item02.vue')
    }
  ]
})

export default router
