import { lazy, Suspense } from "react";
import { BrowserRouter, Route } from "react-router-dom";

const AppRoute = () => {
  const routes = [
    {
      path: "/",
      component: lazy(() => import("../views/dashboard/index.jsx")),
    },
    {
      path: "/design",
      component: lazy(() => import("../views/design/index.jsx")),
    },
  ];

  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
        {routes.map((route) => {
          <Route path={route.path} component={route.component}></Route>;
        })}
      </Suspense>
    </BrowserRouter>
  );
};

export default AppRoute;
