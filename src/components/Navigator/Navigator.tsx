import { Routes, Route } from "react-router";
import Home from "../../pages/Home";

const publicRoutes = [
  {
    path: "/",
    component: Home,
  },
];

const Navigator = () => {
  return (
    <Routes>
      {publicRoutes.map(({ path, component: Component }) => (
        <Route path={path} key={path} element={<Component />} /> 
      ))}
    </Routes>
  );
};

export default Navigator
