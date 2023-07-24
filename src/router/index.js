import { createRouter, createWebHistory } from 'vue-router'

import Main from '../views/Main.vue';
import Catalog from '../views/Catalog.vue';
import Item from '../views/Item.vue';
import About from '../views/About.vue';
import Contacts from '../views/Contacts.vue';
import Cart from '../views/Cart.vue';
import Page404 from '../views/Page404.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main
    },
    {
      path: '/catalog',
      name: 'Catalog',
      component: Catalog
    },
    {
      path: '/catalog/item',
      name: 'item',
      component: Item
    },
    {
      path: '/cart',
      name: 'cart',
      component: Cart
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/contacts',
      name: 'contacts',
      component: Contacts
    },
    {
      path: '/404',
      name: '404',
      component: Page404
    },
  ]
})

export default router
