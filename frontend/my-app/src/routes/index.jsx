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
import CustomersList from "../pages/Customers/CustomersList";
import AddCustomer from "../pages/Customers/AddCustomer";
import CustomerDetails from "../pages/Customers/CustomerDetails";
import EditCustomers from "../pages/Customers/EditCustomers";
import ReturnsList from "../pages/PurchaseReturns/ReturnsList";
import ReturnDetails from "../pages/PurchaseReturns/ReturnDetails";
import NewReturn from "../pages/PurchaseReturns/NewReturn";
import PurchaseList from "../pages/Purchases/PurchaseList";
import PurchaseDetails from "../pages/Purchases/PurchaseDetails";
import NewPurchase from "../pages/Purchases/NewPurchase";
import Pos from "../pages/Sales&POS/Pos";
import SaleDetails from "../pages/Sales&POS/SaleDetails";
import SalesList from "../pages/Sales&POS/SalesList";
import SuppliersList from "../pages/Suppliers/SuppliersList";
import SupplierDetails from "../pages/Suppliers/SupplierDetails";
import AddSupplier from "../pages/Suppliers/AddSupplier";
import EditSupplier from "../pages/Suppliers/EditSupplier";

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
                        element: <AddCategories />
                    },
                    {
                        path: ':id/edit',
                        element: <EditCategories />
                    }
                ]
            },

            // Customers

            {
                path: '/customers',
                children: [
                    {
                        index: true,
                        element: <CustomersList />
                    },
                    {
                        path: 'new',
                        element: <AddCustomer />
                    },
                    {
                        path: ':id',
                        element: <CustomerDetails />
                    },
                    {
                        path: ':id/edit',
                        element: <EditCustomers />
                    }
                ]
            },

            // PurchaseReturns

            {
                path: '/purchasereturns',
                children: [
                    {
                        index: true,
                        element: <ReturnsList />
                    },
                    {
                        path: ':id',
                        element: <ReturnDetails />
                    },
                    {
                        path: 'new',
                        element: <NewReturn />
                    }
                ]
            },

            // Purchases

            {
                index: true,
                element: <PurchaseList />,
                cheildren: [
                    {
                        path: ':id',
                        element: <PurchaseDetails />
                    },
                    {
                        path: 'new',
                        element: <NewPurchase />
                    }
                ]
            },

            // Sales&POS

            {
                path: '/sales&pos',
                children: [
                    {
                        index: true,
                        element: <Pos />
                    },
                    {
                        path: ':id',
                        element: <SaleDetails />
                    },
                    {
                        path: 'list',
                        element: <SalesList />
                    }
                ]
            },

            // SalesReturns

            {
                path: '/salesreturns',
                children: [
                    {
                        index: true,
                        element: <ReturnsList />
                    },
                    {
                        path: ':id',
                        element: <ReturnDetails />
                    },
                    {
                        path: 'new',
                        element: <NewReturn />
                    }
                ]
            },

            // Suppliers

            {
                path: '/suppliers',
                children: [
                    {
                        index: true,
                        element: <SuppliersList />
                    },
                    {
                        path: ':id',
                        element: <SupplierDetails />
                    },
                    {
                        path: 'new',
                        element: <AddSupplier />
                    },
                    {
                        path: ':id/edit',
                        element: <EditSupplier />
                    }
                ]
            }


        ]
    }
])