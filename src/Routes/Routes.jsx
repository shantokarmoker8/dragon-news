import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root.jsx/Root";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Registetion from "../pages/Registetion/Registetion";
import News from "../pages/News/News";
import PrivetRoutes from "./PrivetRoutes";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: (
          <PrivetRoutes>
            <Home></Home>
          </PrivetRoutes>
        ),
        loader: () => fetch("/news.json"),
      },
      {
        path: "/news/:id",
        element: <News></News>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/registetion",
        element: <Registetion></Registetion>,
      },
    ],
  },
]);
export default router;
