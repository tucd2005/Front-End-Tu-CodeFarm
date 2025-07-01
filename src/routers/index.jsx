import { createBrowserRouter, RouterProvider } from "react-router-dom";
import NotFound from "../pages/NotFound";
import clientRoutes from "./clientRoutes";
import adminRoutes from "./adminRoutes";
import ClientLayout from "../layouts/ClientLayout";
import AdminLayout from './../layouts/AdminLayout';

const router = createBrowserRouter([
    {
        path: "/",
        element: <ClientLayout />,
        children: clientRoutes
    },

    {
        path: "/admin",
        element: <AdminLayout />,
        children: adminRoutes

    },

    {
        path: "**",
        element: <NotFound />
    }
]);

const AppRouter = () => {
    return <RouterProvider router={router} />
}
export default AppRouter