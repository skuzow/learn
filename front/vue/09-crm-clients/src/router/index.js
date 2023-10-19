import { createRouter, createWebHistory } from 'vue-router';
import ClientsView from '../views/ClientsView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: ClientsView,
      props: { title: 'Client List' }
    },
    {
      path: '/add-client',
      name: 'add-client',
      component: () => import('../views/AddClientView.vue'),
      props: { title: 'Add Client' }
    },
    {
      path: '/edit-client/:id',
      name: 'edit-client',
      component: () => import('../views/EditClientView.vue'),
      props: { title: 'Edit Client' }
    }
  ]
});

export default router;
