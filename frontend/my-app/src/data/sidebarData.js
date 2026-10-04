const accordion = [
    {
        id: 1,
        title: "Dashboard",
        link: "/dashboard",
        icon: "fas fa-chart-bar",
    },

    // Products
    {
        id: 2,
        title: "Products",
        icon: "fas fa-boxes",
        children: [
            {
                id: 1,
                title: "Products List",
                link: "/products",
                icon: "fas fa-list",
            },
            {
                id: 2,
                title: "Add Product",
                link: "/products/newproduct",
                icon: "fas fa-plus",
            },
        ],
    },

    // Categories
    {
        id: 3,
        title: "Categories",
        icon: "fas fa-tags",
        children: [
            {
                id: 1,
                title: "Categories List",
                link: "/categories",
                icon: "fas fa-list",
            },
            {
                id: 2,
                title: "Add Category",
                link: "/categories/new",
                icon: "fas fa-plus",
            },
        ],
    },

    // Customers
    {
        id: 4,
        title: "Customers",
        icon: "fas fa-users",
        children: [
            {
                id: 1,
                title: "Customers List",
                link: "/customers",
                icon: "fas fa-list",
            },
            {
                id: 2,
                title: "Add Customer",
                link: "/customers/new",
                icon: "fas fa-user-plus",
            },
        ],
    },

    // Suppliers
    {
        id: 5,
        title: "Suppliers",
        icon: "fas fa-truck",
        children: [
            {
                id: 1,
                title: "Suppliers List",
                link: "/suppliers",
                icon: "fas fa-list",
            },
            {
                id: 2,
                title: "Add Supplier",
                link: "/suppliers/new",
                icon: "fas fa-user-plus",
            },
        ],
    },

    // Purchases
    {
        id: 6,
        title: "Purchases",
        icon: "fas fa-shopping-cart",
        children: [
            {
                id: 1,
                title: "Purchases List",
                link: "/purchases",
                icon: "fas fa-list",
            },
            {
                id: 2,
                title: "New Purchase",
                link: "/purchases/new",
                icon: "fas fa-plus",
            },
        ],
    },

    // Sales & POS
    {
        id: 7,
        title: "Sales & POS",
        icon: "fas fa-cash-register",
        children: [
            {
                id: 1,
                title: "POS",
                link: "/sales&pos",
                icon: "fas fa-cash-register",
            },
            {
                id: 2,
                title: "Sales List",
                link: "/sales&pos/list",
                icon: "fas fa-list",
            },
        ],
    },

    // Purchase Returns
    {
        id: 8,
        title: "Purchase Returns",
        icon: "fas fa-undo",
        children: [
            {
                id: 1,
                title: "Returns List",
                link: "/purchasereturns",
                icon: "fas fa-list",
            },
            {
                id: 2,
                title: "New Return",
                link: "/purchasereturns/new",
                icon: "fas fa-plus",
            },
        ],
    },

    // Sales Returns
    {
        id: 9,
        title: "Sales Returns",
        icon: "fas fa-undo-alt",
        children: [
            {
                id: 1,
                title: "Returns List",
                link: "/salesreturns",
                icon: "fas fa-list",
            },
            {
                id: 2,
                title: "New Return",
                link: "/salesreturns/new",
                icon: "fas fa-plus",
            },
        ],
    },
];

export default accordion;