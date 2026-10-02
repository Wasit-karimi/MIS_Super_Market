import { createBrowserRouter } from "react-router-dom";
import Login from "../pages/Login";
import Dashboard from "../pages/Dashboard/Dashboard";
import MainLayout from "../components/layout/MainLayout";
import ProductsList from "../pages/Products/ProductsList";
import AddProduct from "../pages/Products/AddProduct";
import ProductDetail from "../pages/Products/ProductDetail";
import EditProduct from "../pages/Products/EditProduct";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Login />,
    },
    {
        element: <MainLayout />,
        children: [
            {
                path: '/dashboard',
                element: <Dashboard />
            },
            {
                path: '/products',
                children: [
                    {
                        index: true,
                        element: <ProductsList />
                    },
                    {
                        path: 'new',
                        element: <AddProduct />
                    },
                    {
                        path: ':id',
                        element: <ProductDetail />
                    },
                    {
                        path: ':id/edit',
                        element: <EditProduct />
                    }
                ]
            },


        ]
    }
])