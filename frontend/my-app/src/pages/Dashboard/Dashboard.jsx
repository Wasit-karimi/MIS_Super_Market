// ==============================
// Dashboard Data
// ==============================

import DashboardHeader from "../../components/ui/DashboardHeader";
import SalesOverview from "../../components/ui/SalesOverview";
import StatsCards from "../../components/ui/StatsCard";

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

const activities = [
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




// ==============================
// Statistics Cards
// ==============================



// ==============================
// Sales Overview
// ==============================



// ==============================
// Recent Activity
// ==============================

function RecentActivity() {
  return (
    <section className="rounded-xl border border-border bg-card p-5 shadow-sm">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h2 className="font-bold text-dark">
            Recent activity
          </h2>

          <p className="mt-1 text-xs text-slate-500">
            Your latest inventory movements
          </p>
        </div>

        <button
          type="button"
          className="shrink-0 text-xs font-semibold text-primary transition hover:text-blue-700"
        >
          View all
        </button>
      </div>

      <div className="mt-4 divide-y divide-slate-100">
        {activities.map((activity) => (
          <div
            key={activity.product}
            className="flex items-center gap-3 py-3"
          >
            <div className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-blue-50 text-primary">
              <i className={`${activity.icon} text-sm`} />
            </div>

            <div className="min-w-0 flex-1">
              <p className="truncate text-xs font-semibold text-dark">
                {activity.product}
              </p>

              <p className="mt-0.5 text-[10px] text-slate-400">
                {activity.type} · {activity.time}
              </p>
            </div>

            <span
              className={`text-xs font-bold ${activity.amountClass}`}
            >
              {activity.amount}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}

// ==============================
// Summary Cards
// ==============================

function SummaryCards() {
  return (
    <section className="mt-6 grid gap-4 md:grid-cols-3">
      {/* Inventory Health */}
      <article className="rounded-xl bg-primary p-5 text-white shadow-sm">
        <div className="flex items-start justify-between">
          <div>
            <p className="text-xs text-blue-100">
              Inventory health
            </p>

            <p className="mt-1 text-2xl font-bold">
              92.4%
            </p>
          </div>

          <i className="fa-solid fa-circle-check text-lg" />
        </div>

        <div className="mt-5 h-1.5 overflow-hidden rounded-full bg-white/20">
          <div className="h-full w-[92%] rounded-full bg-white" />
        </div>

        <p className="mt-2 text-[11px] text-blue-100">
          Healthy stock levels across 486 products
        </p>
      </article>

      {/* Pending Purchases */}
      <article className="rounded-xl border border-border bg-card p-5 shadow-sm">
        <div className="flex items-center gap-3">
          <div className="grid h-10 w-10 place-items-center rounded-lg bg-amber-50 text-warning">
            <i className="fa-solid fa-clock-rotate-left text-lg" />
          </div>

          <div>
            <p className="text-xs text-slate-500">
              Pending purchases
            </p>

            <p className="mt-1 text-xl font-bold text-dark">
              12 orders
            </p>
          </div>
        </div>

        <button
          type="button"
          className="mt-5 text-xs font-semibold text-primary transition hover:text-blue-700"
        >
          Review orders

          <i className="fa-solid fa-arrow-up-right-from-square ml-1 text-[10px]" />
        </button>
      </article>

      {/* Active Customers */}
      <article className="rounded-xl border border-border bg-card p-5 shadow-sm">
        <div className="flex items-center gap-3">
          <div className="grid h-10 w-10 place-items-center rounded-lg bg-green-50 text-success">
            <i className="fa-solid fa-users text-lg" />
          </div>

          <div>
            <p className="text-xs text-slate-500">
              Active customers
            </p>

            <p className="mt-1 text-xl font-bold text-dark">
              2,840
            </p>
          </div>
        </div>

        <button
          type="button"
          className="mt-5 text-xs font-semibold text-primary transition hover:text-blue-700"
        >
          View customers

          <i className="fa-solid fa-arrow-up-right-from-square ml-1 text-[10px]" />
        </button>
      </article>
    </section>
  );
}

// ==============================
// Dashboard
// ==============================

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

