import { createRouter, createWebHistory } from 'vue-router'
import UserPage from './views/UserPage.vue'
import Home from './views/Home.vue'
import NotFound from './views/NotFound.vue'


export const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', component: Home },
        { path: '/user/:id', name: 'User', component: UserPage },
        { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound },
    ]
})