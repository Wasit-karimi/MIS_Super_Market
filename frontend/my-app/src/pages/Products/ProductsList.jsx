// import { useMemo, useState } from "react";
// // ==============================
// // Products Data
// // ==============================

// const initialProducts = [
//   {
//     id: 1,
//     name: "Wireless Keyboard",
//     sku: "NEX-WK-001",
//     category: "Accessories",
//     price: 89,
//     stock: 124,
//     reorderLevel: 30,
//     status: "In stock",
//     updated: "Today, 10:24 AM",
//     color: "bg-blue-100 text-blue-700",
//   },
//   {
//     id: 2,
//     name: "Office Chair Pro",
//     sku: "NEX-OC-002",
//     category: "Furniture",
//     price: 240,
//     stock: 18,
//     reorderLevel: 25,
//     status: "Low stock",
//     updated: "Today, 9:42 AM",
//     color: "bg-orange-100 text-orange-700",
//   },
//   {
//     id: 3,
//     name: "USB-C Hub 7-in-1",
//     sku: "NEX-UH-003",
//     category: "Accessories",
//     price: 45,
//     stock: 86,
//     reorderLevel: 20,
//     status: "In stock",
//     updated: "Yesterday, 4:16 PM",
//     color: "bg-purple-100 text-purple-700",
//   },
//   {
//     id: 4,
//     name: "Standing Desk",
//     sku: "NEX-SD-004",
//     category: "Furniture",
//     price: 399,
//     stock: 7,
//     reorderLevel: 15,
//     status: "Low stock",
//     updated: "Yesterday, 2:08 PM",
//     color: "bg-emerald-100 text-emerald-700",
//   },
//   {
//     id: 5,
//     name: "Noise Cancelling Headphones",
//     sku: "NEX-NH-005",
//     category: "Electronics",
//     price: 199,
//     stock: 0,
//     reorderLevel: 12,
//     status: "Out of stock",
//     updated: "Jun 18, 2025",
//     color: "bg-pink-100 text-pink-700",
//   },
//   {
//     id: 6,
//     name: "Ergonomic Mouse",
//     sku: "NEX-EM-006",
//     category: "Accessories",
//     price: 59,
//     stock: 64,
//     reorderLevel: 18,
//     status: "In stock",
//     updated: "Jun 18, 2025",
//     color: "bg-cyan-100 text-cyan-700",
//   },
//   {
//     id: 7,
//     name: "27-inch 4K Monitor",
//     sku: "NEX-MN-007",
//     category: "Electronics",
//     price: 449,
//     stock: 21,
//     reorderLevel: 10,
//     status: "In stock",
//     updated: "Jun 17, 2025",
//     color: "bg-yellow-100 text-yellow-700",
//   },
//   {
//     id: 8,
//     name: "Laptop Stand",
//     sku: "NEX-LS-008",
//     category: "Accessories",
//     price: 74,
//     stock: 4,
//     reorderLevel: 10,
//     status: "Low stock",
//     updated: "Jun 16, 2025",
//     color: "bg-indigo-100 text-indigo-700",
//   },
// ];

// const categories = [
//   "All categories",
//   "Accessories",
//   "Furniture",
//   "Electronics",
// ];

// const statuses = [
//   "All statuses",
//   "In stock",
//   "Low stock",
//   "Out of stock",
// ];

// // ==============================
// // Helper Functions
// // ==============================

// function formatCurrency(value) {
//   return new Intl.NumberFormat("en-US", {
//     style: "currency",
//     currency: "USD",
//   }).format(value);
// }

// // ==============================
// // Status Badge
// // ==============================

// function StatusBadge({ status }) {
//   const styles = {
//     "In stock": "bg-green-50 text-success",
//     "Low stock": "bg-amber-50 text-warning",
//     "Out of stock": "bg-red-50 text-danger",
//   };

//   return (
//     <span
//       className={`inline-flex items-center rounded-full px-2.5 py-1 text-xs font-semibold ${
//         styles[status] || "bg-slate-100 text-slate-600"
//       }`}
//     >
//       {status === "Low stock" && (
//         <i className="fa-solid fa-triangle-exclamation mr-1.5 text-xs" />
//       )}

//       {status}
//     </span>
//   );
// }

// // ==============================
// // Product Thumbnail
// // ==============================

// function ProductThumbnail({ product }) {
//   return (
//     <div
//       className={`grid h-11 w-11 shrink-0 place-items-center rounded-xl ${product.color}`}
//       aria-hidden="true"
//     >
//       <i className="fa-solid fa-boxes-stacked text-lg" />
//     </div>
//   );
// }

// // ==============================
// // Filter Select
// // ==============================

// function FilterSelect({ label, value, options, onChange }) {
//   return (
//     <label className="relative block min-w-[160px]">
//       <span className="sr-only">{label}</span>

//       <select
//         value={value}
//         onChange={(event) => onChange(event.target.value)}
//         className="h-10 w-full appearance-none rounded-lg border border-border bg-card px-3 pr-9 text-sm text-dark outline-none transition focus:border-primary focus:ring-2 focus:ring-blue-100"
//       >
//         {options.map((option) => (
//           <option key={option} value={option}>
//             {option}
//           </option>
//         ))}
//       </select>

//       <i className="fa-solid fa-chevron-down pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400" />
//     </label>
//   );
// }

// // ==============================
// // Desktop Products Table
// // ==============================

// function ProductsTable({ products, onDelete }) {
//   return (
//     <div className="hidden overflow-x-auto md:block">
//       <table className="w-full min-w-[850px] border-collapse text-left">
//         <thead>
//           <tr className="border-b border-border bg-slate-50/70 text-xs font-semibold text-slate-500">
//             <th className="w-12 px-5 py-3">
//               <input
//                 type="checkbox"
//                 aria-label="Select all products"
//                 className="h-4 w-4 rounded border-border text-primary focus:ring-primary"
//               />
//             </th>

//             <th className="px-3 py-3">Product</th>

//             <th className="px-3 py-3">Category</th>

//             <th className="px-3 py-3">Price</th>

//             <th className="px-3 py-3">
//               <span className="inline-flex items-center gap-1">
//                 Stock
//                 <i className="fa-solid fa-arrow-down-wide-short text-xs text-slate-400" />
//               </span>
//             </th>

//             <th className="px-3 py-3">Status</th>

//             <th className="px-3 py-3">Last updated</th>

//             <th className="px-5 py-3 text-right">Action</th>
//           </tr>
//         </thead>

//         <tbody className="divide-y divide-border">
//           {products.map((product) => (
//             <tr
//               key={product.id}
//               className="group transition hover:bg-blue-50/30"
//             >
//               <td className="px-5 py-4">
//                 <input
//                   type="checkbox"
//                   aria-label={`Select ${product.name}`}
//                   className="h-4 w-4 rounded border-border text-primary focus:ring-primary"
//                 />
//               </td>

//               <td className="px-3 py-4">
//                 <div className="flex items-center gap-3">
//                   <ProductThumbnail product={product} />

//                   <div>
//                     <p className="text-sm font-semibold text-dark">
//                       {product.name}
//                     </p>

//                     <p className="mt-0.5 text-xs text-slate-400">
//                       {product.sku}
//                     </p>
//                   </div>
//                 </div>
//               </td>

//               <td className="px-3 py-4 text-sm text-slate-600">
//                 {product.category}
//               </td>

//               <td className="px-3 py-4 text-sm font-semibold text-dark">
//                 {formatCurrency(product.price)}
//               </td>

//               <td className="px-3 py-4">
//                 <div>
//                   <p className="text-sm font-semibold text-dark">
//                     {product.stock}
//                   </p>

//                   <p className="mt-0.5 text-xs text-slate-400">
//                     Reorder at {product.reorderLevel}
//                   </p>
//                 </div>
//               </td>

//               <td className="px-3 py-4">
//                 <StatusBadge status={product.status} />
//               </td>

//               <td className="px-3 py-4 text-xs text-slate-500">
//                 {product.updated}
//               </td>

//               <td className="px-5 py-4 text-right">
//                 <div className="flex justify-end gap-1 opacity-0 transition group-hover:opacity-100 group-focus-within:opacity-100">
//                   <button
//                     type="button"
//                     className="rounded-md p-2 text-slate-400 transition hover:bg-blue-50 hover:text-primary"
//                     aria-label={`Open ${product.name}`}
//                   >
//                     <i className="fa-solid fa-arrow-up-right-from-square text-xs" />
//                   </button>

//                   <button
//                     type="button"
//                     onClick={() => onDelete(product.id)}
//                     className="rounded-md p-2 text-slate-400 transition hover:bg-red-50 hover:text-danger"
//                     aria-label={`Delete ${product.name}`}
//                   >
//                     <i className="fa-solid fa-ellipsis-vertical text-sm" />
//                   </button>
//                 </div>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// }

// // ==============================
// // Mobile Products List
// // ==============================

// function ProductsMobileList({ products }) {
//   return (
//     <div className="divide-y divide-border md:hidden">
//       {products.map((product) => (
//         <article key={product.id} className="p-4">
//           <div className="flex items-start gap-3">
//             <ProductThumbnail product={product} />

//             <div className="min-w-0 flex-1">
//               <div className="flex items-start justify-between gap-3">
//                 <div>
//                   <h3 className="truncate text-sm font-semibold text-dark">
//                     {product.name}
//                   </h3>

//                   <p className="mt-0.5 text-xs text-slate-400">
//                     {product.sku}
//                   </p>
//                 </div>

//                 <button
//                   type="button"
//                   className="rounded-md p-1.5 text-slate-400 hover:bg-slate-100"
//                   aria-label={`More actions for ${product.name}`}
//                 >
//                   <i className="fa-solid fa-ellipsis-vertical text-sm" />
//                 </button>
//               </div>

//               <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs">
//                 <span className="font-semibold text-dark">
//                   {formatCurrency(product.price)}
//                 </span>

//                 <span className="text-slate-500">
//                   {product.stock} in stock
//                 </span>

//                 <StatusBadge status={product.status} />
//               </div>
//             </div>
//           </div>
//         </article>
//       ))}
//     </div>
//   );
// }

// // ==============================
// // Products List Page
// // ==============================

// export default function ProductsList() {
//   const [products, setProducts] = useState(initialProducts);
//   const [search, setSearch] = useState("");
//   const [category, setCategory] = useState("All categories");
//   const [status, setStatus] = useState("All statuses");
//   const [sortBy, setSortBy] = useState("Newest first");
//   const [currentPage, setCurrentPage] = useState(1);

//   // ==============================
//   // Filter & Sort Products
//   // ==============================

//   const filteredProducts = useMemo(() => {
//     const result = products.filter((product) => {
//       const searchValue = search.toLowerCase().trim();

//       const matchesSearch =
//         !searchValue ||
//         product.name.toLowerCase().includes(searchValue) ||
//         product.sku.toLowerCase().includes(searchValue);

//       const matchesCategory =
//         category === "All categories" ||
//         product.category === category;

//       const matchesStatus =
//         status === "All statuses" ||
//         product.status === status;

//       return (
//         matchesSearch &&
//         matchesCategory &&
//         matchesStatus
//       );
//     });

//     return [...result].sort((a, b) => {
//       if (sortBy === "Name A-Z") {
//         return a.name.localeCompare(b.name);
//       }

//       if (sortBy === "Stock: low to high") {
//         return a.stock - b.stock;
//       }

//       if (sortBy === "Price: high to low") {
//         return b.price - a.price;
//       }

//       return b.id - a.id;
//     });
//   }, [
//     category,
//     products,
//     search,
//     sortBy,
//     status,
//   ]);

//   // ==============================
//   // Delete Product
//   // ==============================

//   function deleteProduct(productId) {
//     setProducts((currentProducts) =>
//       currentProducts.filter(
//         (product) => product.id !== productId
//       )
//     );
//   }

//   // ==============================
//   // Clear Filters
//   // ==============================

//   function clearFilters() {
//     setSearch("");
//     setCategory("All categories");
//     setStatus("All statuses");
//     setSortBy("Newest first");
//     setCurrentPage(1);
//   }

//   return (
//     <main className="min-h-screen bg-background px-4 py-5 text-dark sm:px-6 lg:px-8">
//       <div className="mx-auto max-w-7xl">

//         {/* ==============================
//             Page Header
//         ============================== */}

//         <header className="mb-7 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
//           <div>
//             <p className="mb-1 text-sm text-slate-500">
//               Manage your store inventory and product catalog.
//             </p>

//             <div className="flex items-center gap-3">
//               <h1 className="text-2xl font-bold tracking-tight text-dark">
//                 Products
//               </h1>

//               <span className="rounded-full bg-blue-50 px-2.5 py-1 text-xs font-semibold text-primary">
//                 {products.length} total
//               </span>
//             </div>
//           </div>

//           <button
//             type="button"
//             className="inline-flex w-fit items-center gap-2 rounded-lg bg-primary px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
//           >
//             <i className="fa-solid fa-plus text-xs" />
//             Add product
//           </button>
//         </header>

//         {/* ==============================
//             Inventory Summary
//         ============================== */}

//         <section className="mb-6 grid gap-4 sm:grid-cols-3">

//           {/* Total Products */}
//           <article className="rounded-xl border border-border bg-card p-4 shadow-sm">
//             <div className="flex items-center gap-3">
//               <div className="grid h-10 w-10 place-items-center rounded-lg bg-blue-50 text-primary">
//                 <i className="fa-solid fa-boxes-stacked text-lg" />
//               </div>

//               <div>
//                 <p className="text-xs text-slate-500">
//                   Total products
//                 </p>

//                 <p className="mt-1 text-xl font-bold text-dark">
//                   486
//                 </p>
//               </div>
//             </div>
//           </article>

//           {/* In Stock */}
//           <article className="rounded-xl border border-border bg-card p-4 shadow-sm">
//             <div className="flex items-center gap-3">
//               <div className="grid h-10 w-10 place-items-center rounded-lg bg-green-50 text-success">
//                 <i className="fa-solid fa-rotate text-lg" />
//               </div>

//               <div>
//                 <p className="text-xs text-slate-500">
//                   In stock
//                 </p>

//                 <p className="mt-1 text-xl font-bold text-dark">
//                   432
//                 </p>
//               </div>
//             </div>
//           </article>

//           {/* Needs Attention */}
//           <article className="rounded-xl border border-border bg-card p-4 shadow-sm">
//             <div className="flex items-center gap-3">
//               <div className="grid h-10 w-10 place-items-center rounded-lg bg-amber-50 text-warning">
//                 <i className="fa-solid fa-triangle-exclamation text-lg" />
//               </div>

//               <div>
//                 <p className="text-xs text-slate-500">
//                   Needs attention
//                 </p>

//                 <p className="mt-1 text-xl font-bold text-dark">
//                   18
//                 </p>
//               </div>
//             </div>
//           </article>
//         </section>

//         {/* ==============================
//             Search & Filters
//         ============================== */}

//         <section className="rounded-xl border border-border bg-card p-4 shadow-sm">
//           <div className="flex flex-col gap-3 xl:flex-row xl:items-center xl:justify-between">

//             {/* Search */}
//             <label className="relative block w-full xl:max-w-sm">
//               <span className="sr-only">
//                 Search products
//               </span>

//               <i className="fa-solid fa-magnifying-glass pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-sm text-slate-400" />

//               <input
//                 type="search"
//                 value={search}
//                 onChange={(event) => {
//                   setSearch(event.target.value);
//                   setCurrentPage(1);
//                 }}
//                 placeholder="Search by product or SKU..."
//                 className="h-10 w-full rounded-lg border border-border bg-card pl-10 pr-3 text-sm text-dark outline-none placeholder:text-slate-400 focus:border-primary focus:ring-2 focus:ring-blue-100"
//               />
//             </label>

//             {/* Filters */}
//             <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">

//               <FilterSelect
//                 label="Filter by category"
//                 value={category}
//                 options={categories}
//                 onChange={(value) => {
//                   setCategory(value);
//                   setCurrentPage(1);
//                 }}
//               />

//               <FilterSelect
//                 label="Filter by status"
//                 value={status}
//                 options={statuses}
//                 onChange={(value) => {
//                   setStatus(value);
//                   setCurrentPage(1);
//                 }}
//               />

//               <FilterSelect
//                 label="Sort products"
//                 value={sortBy}
//                 options={[
//                   "Newest first",
//                   "Name A-Z",
//                   "Stock: low to high",
//                   "Price: high to low",
//                 ]}
//                 onChange={setSortBy}
//               />

//               <button
//                 type="button"
//                 className="inline-flex h-10 items-center justify-center gap-2 rounded-lg border border-border px-3 text-sm font-medium text-slate-600 transition hover:bg-slate-50"
//               >
//                 <i className="fa-solid fa-sliders text-xs" />
//                 More filters
//               </button>
//             </div>
//           </div>

//           {/* Clear Filters */}
//           {(search ||
//             category !== "All categories" ||
//             status !== "All statuses") && (
//             <button
//               type="button"
//               onClick={clearFilters}
//               className="mt-3 text-xs font-semibold text-primary hover:text-blue-700"
//             >
//               Clear all filters
//             </button>
//           )}
//         </section>

//         {/* ==============================
//             Products Table
//         ============================== */}

//         <section className="mt-5 overflow-hidden rounded-xl border border-border bg-card shadow-sm">

//           {/* Table Header */}
//           <div className="flex items-center justify-between border-b border-border px-5 py-4">
//             <div>
//               <h2 className="font-bold text-dark">
//                 All products
//               </h2>

//               <p className="mt-1 text-xs text-slate-500">
//                 Showing {filteredProducts.length} of{" "}
//                 {products.length} products
//               </p>
//             </div>

//             <button
//               type="button"
//               className="hidden items-center gap-2 rounded-lg border border-border px-3 py-2 text-xs font-semibold text-slate-600 transition hover:bg-slate-50 sm:inline-flex"
//             >
//               <i className="fa-solid fa-filter text-xs" />
//               Export
//             </button>
//           </div>

//           {/* Products */}
//           {filteredProducts.length > 0 ? (
//             <>
//               <ProductsTable
//                 products={filteredProducts}
//                 onDelete={deleteProduct}
//               />

//               <ProductsMobileList
//                 products={filteredProducts}
//               />
//             </>
//           ) : (
//             <div className="flex min-h-64 flex-col items-center justify-center px-5 text-center">
//               <div className="grid h-12 w-12 place-items-center rounded-full bg-slate-100 text-slate-400">
//                 <i className="fa-solid fa-magnifying-glass text-lg" />
//               </div>

//               <h3 className="mt-4 font-semibold text-dark">
//                 No products found
//               </h3>

//               <p className="mt-1 text-sm text-slate-500">
//                 Try changing your search or filters.
//               </p>

//               <button
//                 type="button"
//                 onClick={clearFilters}
//                 className="mt-4 text-sm font-semibold text-primary hover:text-blue-700"
//               >
//                 Clear filters
//               </button>
//             </div>
//           )}

//           {/* ==============================
//               Pagination
//           ============================== */}

//           <footer className="flex flex-col gap-3 border-t border-border px-5 py-4 sm:flex-row sm:items-center sm:justify-between">
//             <p className="text-xs text-slate-500">
//               Page {currentPage} of 5
//             </p>

//             <div className="flex items-center gap-1">

//               {/* Previous */}
//               <button
//                 type="button"
//                 onClick={() =>
//                   setCurrentPage((page) =>
//                     Math.max(1, page - 1)
//                   )
//                 }
//                 disabled={currentPage === 1}
//                 className="grid h-8 w-8 place-items-center rounded-md border border-border text-slate-500 transition hover:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-40"
//                 aria-label="Previous page"
//               >
//                 <i className="fa-solid fa-chevron-left text-xs" />
//               </button>

//               {/* Pages */}
//               {[1, 2, 3, 4, 5].map((page) => (
//                 <button
//                   key={page}
//                   type="button"
//                   onClick={() => setCurrentPage(page)}
//                   className={`grid h-8 w-8 place-items-center rounded-md text-xs font-semibold transition ${
//                     page === currentPage
//                       ? "bg-primary text-white"
//                       : "text-slate-500 hover:bg-slate-50"
//                   }`}
//                 >
//                   {page}
//                 </button>
//               ))}

//               {/* Next */}
//               <button
//                 type="button"
//                 onClick={() =>
//                   setCurrentPage((page) =>
//                     Math.min(5, page + 1)
//                   )
//                 }
//                 disabled={currentPage === 5}
//                 className="grid h-8 w-8 place-items-center rounded-md border border-border text-slate-500 transition hover:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-40"
//                 aria-label="Next page"
//               >
//                 <i className="fa-solid fa-chevron-right text-xs" />
//               </button>
//             </div>
//           </footer>
//         </section>
//       </div>
//     </main>
//   );
// }

