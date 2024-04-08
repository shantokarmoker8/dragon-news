import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root.jsx/Root";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Registetion from "../pages/Registetion/Registetion";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
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
