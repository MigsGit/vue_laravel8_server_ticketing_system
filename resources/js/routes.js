import {createRouter,createWebHashHistory,createWebHistory,createMemoryHistory} from 'vue-router';

import Index from './pages/Index.vue'
import Dashboard from './pages/admin/Dashboard.vue'

const routes = [
    {
        path: "/vue_ticketing_system/",
        name: "VueTicketingSystem",
        component:Index,
        children: [
            {
                path: "dashboard",
                name: "Dashboard",
                component:Dashboard
            }
        ]
    },
];
/*



*/
// const router = createRouter({
//     /*NOTE:
//         createWebHistory is creating a #hashtag to direct to diff (router 3)
//         createWebHashHistory is creating a #hashtag to direct to diff (router 4)
//      */
//     history: createWebHashHistory(),
//     // history: createWebHistory(),
//     routes
// })
const router = createRouter({
    history: createWebHistory(),
    routes,
  });


export default router;
