import { createApp } from 'vue';
import { createPinia } from 'pinia';
import { VueQueryPlugin } from '@tanstack/vue-query';
import { createRouter, createWebHistory } from 'vue-router';
import App from './App.vue';
import Home from './HomeView.vue';
const router = createRouter({ history: createWebHistory(), routes: [{ path: '/', component: Home }] });
createApp(App).use(createPinia()).use(VueQueryPlugin).use(router).mount('#app');
