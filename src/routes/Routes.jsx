import {
    createBrowserRouter
} from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../components/Home/Home/Home";
import Login from "../components/Authentication/Login/Login";
import Register from "../components/Authentication/Register/Register";
import NotFound from "../components/NotFound/NotFound";
import Rooms from "../components/Rooms/Rooms";
import RoomDetail from "../components/RoomDetail/RoomDetail";
import PrivateRoute from "./PrivateRoute";
import Bookings from "../components/Booking/Bookings/Bookings";
import UpdateBooking from "../components/Booking/UpdateBooking/UpdateBooking";


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
                // loader: () => fetch('https://book-com-server.vercel.app/rooms'),
                element: <Rooms />
            },
            {
                path: '/roomDetail/:id',
                loader: ({params}) => fetch(`https://book-com-server.vercel.app/rooms/${params.id}`),
                element: <RoomDetail />
            },
            {
                path: '/updateBooking/:id',
                loader: ({params}) => fetch(`https://book-com-server.vercel.app/bookings/${params.id}`),
                element: <PrivateRoute><UpdateBooking /></PrivateRoute>
            },
            {
                path: '/bookings',
                element: <PrivateRoute><Bookings /></PrivateRoute>,
                // loader: () => fetch('https://book-com-server.vercel.app/bookings')
            }
        ]
    },
]);


export default router;