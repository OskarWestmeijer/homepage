import { createRouter, createWebHistory } from 'vue-router'
import AboutView from '../views/AboutView.vue'
import ProjectsView from '../views/ProjectsView.vue'
import NotesView from '../views/NotesView.vue'
import { noteItems } from '../views/notes'

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
      component: NotesView
    }
  ]
})

noteItems.forEach((item, index) => {
  router.addRoute({
    path: `/notes/${item.link}`,
    name: `Item${index + 1}`,
    component: () => import(`../views/notes/${item.componentName}.vue`)
  })
})

export default router
