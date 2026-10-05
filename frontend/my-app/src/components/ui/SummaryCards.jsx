import Button from "./Button";

function SummaryCards() {
    return (
        <section className="mt-6 grid gap-4 md:grid-cols-3">
            {/* Inventory Health */}
            <article className="rounded-xl bg-primary p-5 text-white shadow-sm hover:shadow-lg hover:shadow-primary/40 transition-all duration-300 cursor-pointer">
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
            <article className="rounded-xl border border-border bg-card p-5 shadow-sm hover:shadow-lg transition-all duration-300 cursor-pointer">
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

                <Button
                    type="button"
                    title="Review Orders"
                    icon="fa-solid fa-arrow-up-right-from-square mr-1 text-[10px]" className="mt-5 text-xs font-semibold text-primary transition hover:text-blue-700" />
            </article>

            {/* Active Customers */}
            <article className="rounded-xl border border-border bg-card p-5 shadow-sm hover:shadow-lg transition-all duration-300 cursor-pointer">
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

                <Button
                    type="button"
                    title="Review Orders"
                    icon="fa-solid fa-arrow-up-right-from-square mr-1 text-[10px]" className="mt-5 text-xs font-semibold text-primary transition hover:text-blue-700" />
            </article>
        </section>
    );
}


export default SummaryCards