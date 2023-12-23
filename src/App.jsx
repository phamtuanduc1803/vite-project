import { Routes, Route } from "react-router-dom";
import Dashboard from "./views/dashboard";
import Design from "./views/design";

const App = () => {
  const routes = [
    {
      path: "/",
      component: <Dashboard />,
    },
    {
      path: "/design",
      component: <Design />,
    },
  ];

  return (
    <Routes>
      {routes.map((route, index) => {
        return (
          <Route key={index} path={route.path} element={route.component} />
        );
      })}
    </Routes>
  );
};

export default App;
