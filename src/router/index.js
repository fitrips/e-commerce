import { createWebHistory, createRouter } from "vue-router";
import Home from "../views/Home.vue";
import Login from "../views/Login.vue";
import Register from "../views/Register.vue";
import Produk from "../views/Produk.vue"

const routes = [
    {
        path: "/",
        name: "Home",
        component: Home,
    },
    {
        path: "/login",
        name: "Login",
        component: Login,
        meta: {requireGuest: true},
    },
    {
        path: "/register",
        name: "Register",
        component: Register,
    },
    {
        path: "/produk",
        name: "Produk",
        component: Produk,
    },

];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

router.beforeEach((to, from, next) => {
    if (to.meta.requireLogin && store.getters["auth/isAuthenticated"]) {
        next("/"); // redirect to home
    } else {
        next();
    }
});

// router.beforeEach((to, from, next) => {
//     if (to.meta.requireLogin && store.getters["auth/isAuthenticated"]) {
//         next("/login"); // redirect to home
//     } else {
//         next();
//     }
// });

export default router;