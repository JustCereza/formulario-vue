import { createRouter, createWebHistory } from 'vue-router';
import LoginPage from '@/pages/LoginPage.vue';
import Register from '@/pages/Register.vue';
import UserProfilePage from '@/pages/UserProfilePage.vue';
import RegisterStep1 from '@/components/RegisterStep1.vue';
import RegisterStep2 from '@/components/RegisterStep2.vue';
import RegisterStep3 from '@/components/RegisterStep3.vue';

const routes = [
  { path: '/', name: 'Login', component: LoginPage },
  { path: '/register', name: 'Register', component: Register },
  { path: '/profile', name: 'UserProfile', component: UserProfilePage },
  { path: '/registerStep1', name: 'RegisterStep1', component: RegisterStep1 },
  { path: '/registerStep2', name: 'RegisterStep2', component: RegisterStep2 },
  { path: '/registerStep3', name: 'RegisterStep3', component: RegisterStep3 },
  
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
