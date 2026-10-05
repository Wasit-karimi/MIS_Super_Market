import Button from "./Button";

function DashboardHeader() {
  return (
    <header className="mb-7 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
      <div>
        <p className="mb-1 text-sm text-slate-500">
          Here&apos;s what&apos;s happening with your store today.
        </p>

        <h1 className="text-2xl font-bold tracking-tight text-dark">
          Dashboard overview
        </h1>
      </div>

      <Button type="button" title="New Sale" icon="fa-solid fa-plus" 
      className="inline-flex w-fit items-center gap-2 rounded-lg bg-primary px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition-all hover:bg-blue-700 focus:outline-none focus:ring-1 focus:ring-primary focus:ring-offset-1"
      />
    </header>
  );
}

export default DashboardHeader