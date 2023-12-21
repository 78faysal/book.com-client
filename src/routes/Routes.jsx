import {
    createBrowserRouter
} from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../components/Home/Home/Home";
import Login from "../components/Authentication/Login/Login";
import Register from "../components/Authentication/Register/Register";
import NotFound from "../components/NotFound/NotFound";
import Rooms from "../components/Rooms/Rooms";


const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        errorElement: <NotFound />,
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
            },
            {
                path: '/rooms',
                element: <Rooms />
            }
        ]
    },
]);


export default router;