import { stats } from "../../pages/Dashboard/Dashboard";


function StatsCards() {
  return (
    <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
      {stats.map((stat) => (
        <article
          key={stat.title}
          className="rounded-xl border border-border bg-card p-5 shadow-sm hover:shadow-md hover:bg-border transition-all duration-300 cursor-pointer"
        >
          <div className="flex items-start justify-between gap-3">
            <div
              className={`grid h-10 w-10 place-items-center rounded-lg ${stat.iconClass}`}
            >
              <i className={`${stat.icon} text-lg`} />
            </div>

            <span
              className={`rounded-full px-2 py-1 text-[10px] font-bold ${stat.changeClass}`}
            >
              {stat.change}
            </span>
          </div>

          <p className="mt-5 text-xs font-medium text-slate-500">
            {stat.title}
          </p>

          <p className="mt-1 text-2xl font-bold tracking-tight text-dark">
            {stat.value}
          </p>

          <p className="mt-1 text-xs text-slate-400">
            {stat.description}
          </p>
        </article>
      ))}
    </section>
  );
}

export default StatsCards;