import {
    createBrowserRouter
} from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../components/Home/Home/Home";
import Login from "../components/Authentication/Login/Login";
import Register from "../components/Authentication/Register/Register";


const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/register',
                element: <Register />
            }
        ]
    },
]);


export default router;