import AddProduct from "../pages/admin/ProductsAdmin/AddProducts"
import DetailProducts from "../pages/admin/ProductsAdmin/DetailProducts"
import EditProducts from "../pages/admin/ProductsAdmin/EditProducts"
import ListProducts from "../pages/admin/ProductsAdmin/ListProducts"

export const adminRoutes = [

    { path: "products", element: <ListProducts /> },
    { path: "products/add", element: <AddProduct /> },
    { path: "products/:id", element: <DetailProducts /> },

]
export default adminRoutes