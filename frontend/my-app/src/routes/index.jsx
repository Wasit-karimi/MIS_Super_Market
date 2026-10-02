import { createBrowserRouter } from "react-router-dom";
import Login from "../pages/Login";
import Dashboard from "../pages/Dashboard/Dashboard";
import MainLayout from "../components/layout/MainLayout";
import ProductsList from "../pages/Products/ProductsList";
import AddProduct from "../pages/Products/AddProduct";
import ProductDetail from "../pages/Products/ProductDetail";
import EditProduct from "../pages/Products/EditProduct";
import Categories from "../pages/Categories/Categories";
import AddCategories from "../pages/Categories/AddCategories";
import EditCategories from "../pages/Categories/EditCategories";

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

            // Products

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

            // Categories

            {
                path: '/categories',
                children: [
                    {
                        index: true,
                        element: <Categories />
                    },
                    {
                        path: 'new',
                        element: <AddCategories/>
                    },
                    {
                        path: ':id/edit',
                        element: <EditCategories />
                    }
                ]
            }


        ]
    }
])