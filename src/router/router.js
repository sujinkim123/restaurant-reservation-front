import { createWebHistory, createRouter } from "vue-router";
import ViewHome from '../views/ViewHome';
import ViewAbout from '../views/ViewAbout'
import ViewBoard from '../views/ViewBoard'
import ViewLogin from '../views/ViewLogin'
import ViewSignup from '../views/ViewSignup'

const routes = [
  {
    path: "/",
    component: ViewHome,
  },
  {
    path: "/about",
    component: ViewAbout,
  },
  {
    path: "/board/list",
    component: ViewBoard,
  },
  {
    path: "/login",
    component: ViewLogin,
  },
  {
    path: "/signup",
    component: ViewSignup,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;