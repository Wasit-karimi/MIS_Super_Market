import { chartData } from "../../pages/Dashboard/Dashboard";
import Button from "./Button";

function SalesOverview() {
    return (
        <section className="rounded-xl border border-border bg-card p-5 shadow-sm hover:shadow-lg transition-all duration-300 cursor-pointer">
            <div className="flex items-start justify-between gap-4">
                <div>
                    <h2 className="font-bold text-dark">
                        Sales overview
                    </h2>

                    <p className="mt-1 text-xs text-slate-500">
                        Revenue performance over the last 7 days
                    </p>
                </div>


                <Button type="button" title="This Week" icon="fa-solid fa-chevron-down" className="inline-flex shrink-0 items-center gap-2 rounded-md border border-border px-3 py-2 text-xs font-semibold text-slate-600 transition hover:bg-slate-50" />
            </div>

            <div className="mt-8 flex h-56 gap-3 border-b border-l border-slate-100 px-3 pb-1 pt-2">
                {/* Y-axis */}
                <div className="flex flex-col justify-between pb-7 text-[10px] text-slate-400">
                    <span>$6k</span>
                    <span>$4k</span>
                    <span>$2k</span>
                    <span>$0</span>
                </div>

                {/* Chart */}
                <div className="flex flex-1 items-end gap-2 sm:gap-4">
                    {chartData.map((item, index) => (
                        <div
                            key={item.day}
                            className="group flex h-full flex-1 flex-col justify-end"
                        >
                            <div className="flex h-full items-end">
                                <div
                                    className={`w-full rounded-t-md transition group-hover:opacity-75 ${index === 5 ? "bg-primary" : "bg-blue-100"
                                        }`}
                                    style={{ height: `${item.value}%` }}
                                    title={`${item.day}: ${item.value}%`}
                                />
                            </div>

                            <span className="mt-3 text-center text-[10px] text-slate-400">
                                {item.day}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}


export default SalesOverview