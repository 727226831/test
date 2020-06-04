import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import Dashboard from "../views/Dashboard.vue";

import info from "../views/info.vue";
import CN from "../views/infos/CN.vue";
import SP from "../views/infos/SP.vue";
import XT from "../views/infos/XT.vue";
import completed from "../views/infos/SPs/completed.vue";
import followme from "../views/infos/SPs/followme.vue";
import giveme from "../views/infos/SPs/giveme.vue";
import undone from "../views/infos/SPs/undone.vue";
import Ship from "../views/dashboards/Ship.vue";
import Recycle from "../views/dashboards/Recycle.vue";
import Supplement from "../views/dashboards/Supplement.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
  {
    path: "/Dashboard",
    name: "Dashboard",
    component: Dashboard,
    redirect: "Dashboard/Ship",
    children: [
      {
        path: "Ship",
        component: Ship,
      },
      {
        path: "Recycle",
        component: Recycle,
      },
      {
        path: "Supplement",
        component: Supplement,
      },
    ],
  },
  {
    path: "/info",
    name: "info",
    component: info,
    redirect: "info/SP",
    children: [
      {
        path: "CN",
        component: CN,
      },
      {
        path: "SP",
        component: SP,
        redirect: "SP/undone",
        children: [
          {
            path: "undone",
            component: undone,
          },
          {
            path: "completed",
            component: completed,
          },
          {
            path: "followme",
            component: followme,
          },
          {
            path: "giveme",
            component: giveme,
          },
        ],
      },
      {
        path: "XT",
        component: XT,
      },
    ],
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
