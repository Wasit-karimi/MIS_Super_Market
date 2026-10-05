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

      <Button type="button" title="New Sale" icon="fa-solid fa-plus" />
    </header>
  );
}

export default DashboardHeader