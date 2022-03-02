import { lazy } from "react";

const routes = [
  {
    path: "/",
    component: lazy(() => import("../pages/Home")),
  },
  {
    path: "/main",
    component: lazy(() => import("../pages/DashBaord")),
  },
];

export default routes;
