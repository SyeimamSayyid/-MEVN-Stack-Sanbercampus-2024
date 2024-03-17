import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue'; // Import halaman home
import DB from '../views/DB.vue';
import Daftar from '../views/Daftar.vue';
import Pesanan from '../views/Pesanan.vue';
import JB from '../views/jenisberita.vue';
import Profil from '../views/p.vue';
import Perjalanan from '../views/Perjalanan.vue';
import Kasir from '../views/Kasir.vue';
import PA from '../views/PA.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/', // Rute untuk halaman home
      name: 'home',
      component: HomeView // Menggunakan komponen HomeView untuk halaman home
    },
    {
      path: '/PA', // Rute untuk halaman PA
      name: 'PA',
      component: PA
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: DB
    },
    {
      path: '/daftar',
      name: 'daftar',
      component: Daftar
    },
    {
      path: '/pesanan',
      name: 'pesanan',
      component: Pesanan
    },
    {
      path: '/profil',
      name: 'profil',
      component: Profil
    },
    {
      path: '/perjalanan',
      name: 'perjalanan',
      component: Perjalanan
    },
    {
      path: '/kasir',
      name: 'kasir',
      component: Kasir
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    }
  ]
});

export default router;
