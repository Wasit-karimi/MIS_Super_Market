import { activities } from "../../pages/Dashboard/Dashboard";
import Button from "./Button";

function RecentActivity() {
  return (
    <section className="rounded-xl border border-border bg-card p-5 shadow-sm hover:shadow-lg transition-all duration-300 cursor-pointer">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h2 className="font-bold text-dark">
            Recent activity
          </h2>

          <p className="mt-1 text-xs text-slate-500">
            Your latest inventory movements
          </p>
        </div>

        <Button
          type="button"
          title="view all"
          icon="fa-solid fa-chevron-right" className="shrink-0 text-xs font-semibold text-primary transition hover:text-blue-700" />
      </div>

      <div className="mt-4 divide-y divide-slate-100 ">
        {activities.map((activity) => (
          <div
            key={activity.product}
            className="flex items-center gap-3 py-3 "
          >
            <div className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-blue-50 text-primary ">
              <i className={`${activity.icon} text-sm`} />
            </div>

            <div className="min-w-0 flex-1">
              <p className="truncate text-xs font-semibold text-dark ">
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

export default RecentActivity