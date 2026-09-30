import { createBrowserRouter } from "react-router-dom";
import Login from "../pages/Login";
import Dashboard from "../pages/Dashboard/Dashboard";
import AddCategories from "../pages/Categories/AddCategories";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Login />,
    },
    {
        path: 'dashboard',
        element: <Dashboard />,
        children: [
            {
                path: 'categories',
                children: [
                    {
                        path: 'add',
                        element: <AddCategories />
                    }
                ]
            }
        ]
    }
])