import { createWebHistory, createRouter } from "vue-router"
import HomePage from "./components/HomePage/HomePage.vue"

const routes = [
    {
        path: "/",
        name: "Home",
        component: HomePage
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router