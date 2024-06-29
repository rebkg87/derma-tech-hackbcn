import { createBrowserRouter } from "react-router-dom";
import Layout from "../layouts/Layout";
import Home from "../pages/Home";
import Tools from "../pages/Tools";
import Learn from "../pages/Learn";
import Login from "../pages/Login";

const router = createBrowserRouter([
    {
        path: "/",
        element: < Layout />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "tools",
                element: <Tools/>,
            },
            {
                path: "learn",
                element: <Learn/>,
            },
            {
                path: "login",
                element: <Login/>,
                },
        ],
    },
]);

export default router;