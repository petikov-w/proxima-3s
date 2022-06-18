import {createRouter, createWebHistory} from "vue-router";

const routerHistory = createWebHistory();


import HomePage from "@/pages/HomePage";
import notFoundPage from "@/pages/NotFoundPage";
import ThankYouPage from "@/pages/ThankYouPage";
import {site} from "@/_config";

const routers = createRouter(
    {
        history: routerHistory,
        routes: [
            {
                path: "/",
                name: "home",
                component: HomePage,
                meta: {
                    title: "Главная"
                }
            },
            {
                path: "/thankyou",
                name: "thankyou",
                component: ThankYouPage,
                meta: {
                    title: "Страница благодарности"
                }
            },
            {
                path: "/:CatchAll(.*)",
                name: "404",
                component: notFoundPage,
                meta: {
                    title: "404 - страница не найдена"
                }
            },
        ]
    }
)

routers.beforeEach((to,from, next) => {
    document.title = `${site.title} - ${to.meta.title}`;
    next();
})

export default routers;