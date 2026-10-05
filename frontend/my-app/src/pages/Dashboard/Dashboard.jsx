/* eslint-disable react-refresh/only-export-components */
import DashboardHeader from "../../components/ui/DashboardHeader";
import RecentActivity from "../../components/ui/RecentActivity";
import SalesOverview from "../../components/ui/SalesOverview";
import StatsCards from "../../components/ui/StatsCard";
import SummaryCards from "../../components/ui/SummaryCards";

export const stats = [
    {
        title: "Total Revenue",
        value: "$24,780.00",
        description: "from last month",
        change: "+12.8%",
        icon: "fa-solid fa-circle-dollar-to-slot",
        iconClass: "bg-blue-50 text-primary",
        changeClass: "bg-green-50 text-success",
    },
    {
        title: "Total Sales",
        value: "1,248",
        description: "from last month",
        change: "+8.4%",
        icon: "fa-solid fa-receipt",
        iconClass: "bg-green-50 text-success",
        changeClass: "bg-green-50 text-success",
    },
    {
        title: "Total Products",
        value: "486",
        description: "new this month",
        change: "+4.2%",
        icon: "fa-solid fa-boxes-stacked",
        iconClass: "bg-amber-50 text-warning",
        changeClass: "bg-green-50 text-success",
    },
    {
        title: "Low Stock Items",
        value: "18",
        description: "below reorder point",
        change: "Needs attention",
        icon: "fa-solid fa-triangle-exclamation",
        iconClass: "bg-red-50 text-danger",
        changeClass: "bg-red-50 text-danger",
    },
];

export const chartData = [
    { day: "Mon", value: 42 },
    { day: "Tue", value: 58 },
    { day: "Wed", value: 49 },
    { day: "Thu", value: 76 },
    { day: "Fri", value: 63 },
    { day: "Sat", value: 91 },
    { day: "Sun", value: 72 },
];

export const activities = [
    {
        product: "Wireless Keyboard",
        type: "Sale",
        time: "10 minutes ago",
        amount: "+$89.00",
        icon: "fa-solid fa-arrow-trend-up",
        amountClass: "text-success",
    },
    {
        product: "Office Chair Pro",
        type: "Purchase",
        time: "32 minutes ago",
        amount: "-$240.00",
        icon: "fa-solid fa-arrow-down",
        amountClass: "text-danger",
    },
    {
        product: "USB-C Hub 7-in-1",
        type: "Sale",
        time: "1 hour ago",
        amount: "+$45.00",
        icon: "fa-solid fa-arrow-trend-up",
        amountClass: "text-success",
    },
    {
        product: "Standing Desk",
        type: "Sale",
        time: "2 hours ago",
        amount: "+$399.00",
        icon: "fa-solid fa-arrow-trend-up",
        amountClass: "text-success",
    },
];


export default function Dashboard() {
    return (
        <main className="min-h-screen bg-background px-4 py-5 text-dark sm:px-6 lg:px-8">
            <div className="mx-auto max-w-7xl">
                <DashboardHeader />

                <StatsCards />

                <div className="mt-6 grid gap-6 xl:grid-cols-[1.45fr_1fr]">
                    <SalesOverview />
                    <RecentActivity />
                </div>

                <SummaryCards />
            </div>
        </main>
    );
}

