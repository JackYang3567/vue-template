import Vue from "vue"
import Router from "vue-router"
import Home from "./views/Home.vue"



Vue.use(Router)

export default new Router({
    mode: "history",
    base: process.env.BASE_URL,
    routes: [

        {
            path: "/",
            name: "home",
            component: Home
        },
        {
            path: "/about",
            name: "about",

            // route level code-splitting
            // this generates a separate chunk (about.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => import(/* webpackChunkName: "about" */ "./views/About.vue")
        },

        {
            path: "/contact",
            name: "contact",
            component: () => import(/* webpackChunkName: "contact" */"./views/Contact.vue")
        },

        {
            path: "/blog",
            name: "blog",
            component: () => import(/* webpackChunkName: "contact" */"./views/blog/Blogs.vue")
        },
        {

            // 会匹配所有路径
            path: "*",
            name: "404",
            component: () => import(/* webpackChunkName: "404" */ "./views/404.vue")
        }
    ]
})
