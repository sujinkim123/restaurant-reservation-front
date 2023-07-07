import { createWebHistory, createRouter } from "vue-router";
import ViewHome from '../views/ViewHome'
import ViewWeather from '../views/ViewWeather'
import ViewPopular from '../views/ViewPopular'
import ViewTabling from '../views/ViewTabling'
import ViewTicket from '../views/ViewTicket'
import ViewBoard from '../views/ViewBoard'
import ViewBoardDetail from '../views/ViewBoardDetail'
import ViewLogin from '../views/ViewLogin'
import ViewSignup from '../views/ViewSignup'

const routes = [
  {
    path: "/",
    component: ViewHome,
  },
  {
    path: "/weather",
    component: ViewWeather,
  },
  {
    path: "/best100",
    component: ViewPopular,
  },
  {
    path: "/tabling",
    component: ViewTabling,
  },
  {
    path: "/ticket",
    component: ViewTicket,
  },
  {
    path: "/board/list",
    component: ViewBoard,
  },
  {
    path: "/board/detail",
    component: ViewBoardDetail
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