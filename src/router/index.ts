import { createRouter, createWebHistory } from 'vue-router'
import AboutView from '../views/AboutView.vue'
import ProjectsView from '../views/ProjectsView.vue'
import NotesView from '../views/NotesView.vue'
import { noteItems } from '../views/notes'
import Weather from '@/views/projects/Weather.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'about',
      component: AboutView,
      meta: {
        title: 'About'
      }
    },
    {
      path: '/projects',
      name: 'projects',
      component: ProjectsView,
      meta: {
        title: 'Projects'
      }
    },
    {
      path: '/projects/weather',
      name: 'weather',
      component: Weather,
      meta: {
        title: 'Weather'
      }
    },
    {
      path: '/notes',
      name: 'notes',
      component: NotesView,
      meta: {
        title: 'Notes'
      }
    }
  ]
})

// Dynamically add routes for note items
noteItems.forEach((item, index) => {
  router.addRoute({
    path: `/notes/${item.link}`,
    name: `Item${index + 1}`,
    component: () => import(`../views/notes/${item.componentName}.vue`),
    props: {
      item: item
    },
    meta: {
      title: item.title
    }
  })
})

router.beforeEach((to, from, next) => {
  const titlePrefix = 'Oskar Westmeijer'
  // Update the document title based on the route meta field
  if (to.meta && to.meta.title) {
    document.title = to.meta.title + ' • ' + titlePrefix
  } else {
    document.title = titlePrefix
  }
  next()
})

export default router
