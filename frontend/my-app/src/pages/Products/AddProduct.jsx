
// import { useState } from "react";
// import ProfitPreview from "../../components/ui/ProfitPreview";

// const initialForm = {
//   name: "",
//   sku: "",
//   category: "",
//   description: "",
//   price: "",
//   costPrice: "",
//   stock: "",
//   reorderLevel: "",
//   supplier: "",
//   status: "active",
// };

// const categories = [
//   "Accessories",
//   "Furniture",
//   "Electronics",
//   "Office Supplies",
//   "Computer Equipment",
// ];

// const suppliers = [
//   "TechSource Ltd.",
//   "Office World Supplies",
//   "Nexus Wholesale",
//   "Global Equipment Co.",
// ];

// // Component: reusable form field.
// function Field({
//   label,
//   name,
//   value,
//   onChange,
//   placeholder,
//   type = "text",
//   required = false,
// }) {
//   return (
//     <label className="block">
//       <span className="mb-1.5 block text-sm font-semibold text-dark">
//         {label}
//         {required && <span className="ml-1 text-danger">*</span>}
//       </span>

//       <input
//         name={name}
//         type={type}
//         value={value}
//         onChange={onChange}
//         placeholder={placeholder}
//         required={required}
//         min={type === "number" ? "0" : undefined}
//         className="h-11 w-full rounded-lg border border-border bg-card px-3 text-sm text-dark outline-none transition placeholder:text-slate-400 focus:border-primary focus:ring-2 focus:ring-blue-100"
//       />
//     </label>
//   );
// }

// // Component: select input.
// function SelectField({
//   label,
//   name,
//   value,
//   onChange,
//   options,
//   placeholder,
//   required = false,
// }) {
//   return (
//     <label className="block">
//       <span className="mb-1.5 block text-sm font-semibold text-dark">
//         {label}
//         {required && <span className="ml-1 text-danger">*</span>}
//       </span>

//       <select
//         name={name}
//         value={value}
//         onChange={onChange}
//         required={required}
//         className="h-11 w-full rounded-lg border border-border bg-card px-3 text-sm text-dark outline-none transition focus:border-primary focus:ring-2 focus:ring-blue-100"
//       >
//         <option value="">{placeholder}</option>

//         {options.map((option) => (
//           <option key={option} value={option}>
//             {option}
//           </option>
//         ))}
//       </select>
//     </label>
//   );
// }

// // Component: product image upload area.
// function ImageUpload({ image, onImageChange, onRemove }) {
//   function handleFileChange(event) {
//     const file = event.target.files?.[0];

//     if (!file) return;

//     const reader = new FileReader();

//     reader.onload = () => onImageChange(reader.result);

//     reader.readAsDataURL(file);
//   }

//   return (
//     <div>
//       <p className="mb-1.5 text-sm font-semibold text-dark">
//         Product image
//       </p>

//       <div className="relative flex min-h-44 items-center justify-center overflow-hidden rounded-xl border-2 border-dashed border-border bg-slate-50">
//         {image ? (
//           <>
//             <img
//               src={image}
//               alt="Product preview"
//               className="h-44 w-full object-contain"
//             />

//             <button
//               type="button"
//               onClick={onRemove}
//               className="absolute right-3 top-3 grid h-8 w-8 place-items-center rounded-full bg-white text-danger shadow-sm hover:bg-red-50"
//               aria-label="Remove product image"
//             >
//               <i className="fa-solid fa-xmark text-sm"></i>
//             </button>
//           </>
//         ) : (
//           <label className="flex cursor-pointer flex-col items-center px-5 py-8 text-center">
//             <div className="grid h-12 w-12 place-items-center rounded-full bg-blue-50 text-primary">
//               <i className="fa-solid fa-cloud-arrow-up text-lg"></i>
//             </div>

//             <p className="mt-3 text-sm font-semibold text-dark">
//               Upload product image
//             </p>

//             <p className="mt-1 text-xs text-slate-500">
//               PNG, JPG or WEBP up to 5MB
//             </p>

//             <input
//               type="file"
//               accept="image/png,image/jpeg,image/webp"
//               onChange={handleFileChange}
//               className="sr-only"
//             />
//           </label>
//         )}
//       </div>
//     </div>
//   );
// }


// export default function AddProducts({
//   onBack,
//   onProductAdded,
// }) {
//   const [form, setForm] = useState(initialForm);
//   const [image, setImage] = useState("");
//   const [errors, setErrors] = useState({});
//   const [saved, setSaved] = useState(false);

//   function handleChange(event) {
//     const { name, value } = event.target;

//     setForm((current) => ({
//       ...current,
//       [name]: value,
//     }));

//     setErrors((current) => ({
//       ...current,
//       [name]: "",
//     }));

//     setSaved(false);
//   }

//   function validate() {
//     const nextErrors = {};

//     if (!form.name.trim()) {
//       nextErrors.name = "Product name is required.";
//     }

//     if (!form.sku.trim()) {
//       nextErrors.sku = "SKU is required.";
//     }

//     if (!form.category) {
//       nextErrors.category = "Select a category.";
//     }

//     if (!form.price || Number(form.price) <= 0) {
//       nextErrors.price = "Enter a valid selling price.";
//     }

//     if (form.stock === "" || Number(form.stock) < 0) {
//       nextErrors.stock = "Enter the current stock quantity.";
//     }

//     setErrors(nextErrors);

//     return Object.keys(nextErrors).length === 0;
//   }

//   function handleSubmit(event) {
//     event.preventDefault();

//     if (!validate()) return;

//     const product = {
//       ...form,
//       image,
//       price: Number(form.price),
//       costPrice: Number(form.costPrice || 0),
//       stock: Number(form.stock),
//       reorderLevel: Number(form.reorderLevel || 0),
//     };

//     onProductAdded?.(product);

//     setSaved(true);
//   }

//   function handleReset() {
//     setForm(initialForm);
//     setImage("");
//     setErrors({});
//     setSaved(false);
//   }

//   return (
//     <main className="min-h-screen bg-background px-4 py-5 text-dark sm:px-6 lg:px-8">
//       <div className="mx-auto max-w-6xl">

//         {/* Page Header */}
//         <header className="mb-7 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
//           <div className="flex items-center gap-3">
//             <button
//               type="button"
//               onClick={onBack}
//               className="grid h-10 w-10 place-items-center rounded-lg border border-border bg-card text-slate-600 transition hover:bg-slate-50"
//               aria-label="Back to products"
//             >
//               <i className="fa-solid fa-arrow-left text-sm"></i>
//             </button>

//             <div>
//               <p className="mb-1 text-sm text-slate-500">
//                 Products / Add product
//               </p>

//               <h1 className="text-2xl font-bold tracking-tight text-dark">
//                 Add product
//               </h1>
//             </div>
//           </div>

//           <div className="flex items-center gap-3">
//             <button
//               type="button"
//               onClick={handleReset}
//               className="inline-flex items-center gap-2 rounded-lg border border-border bg-card px-4 py-2.5 text-sm font-semibold text-slate-600 transition hover:bg-slate-50"
//             >
//               <i className="fa-solid fa-rotate-left text-xs"></i>
//               Reset
//             </button>

//             <button
//               type="submit"
//               form="add-product-form"
//               className="inline-flex items-center gap-2 rounded-lg bg-primary px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700 focus:outline-none focus:ring-1 focus:ring-primary focus:ring-offset-1"
//             >
//               <i className="fa-solid fa-floppy-disk text-xs"></i>
//               Save product
//             </button>
//           </div>
//         </header>

//         {/* Success Message */}
//         {saved && (
//           <div className="mb-5 flex items-center gap-3 rounded-lg border border-green-200 bg-green-50 px-4 py-3 text-sm font-medium text-success">
//             <i className="fa-solid fa-check text-sm"></i>
//             Product saved successfully.
//           </div>
//         )}

//         <form
//           id="add-product-form"
//           onSubmit={handleSubmit}
//           className="grid gap-6 xl:grid-cols-[1fr_340px]"
//         >
//           {/* Main Product Information */}
//           <div className="space-y-6">

//             {/* Basic Information */}
//             <section className="rounded-xl border border-border bg-card p-5 shadow-sm sm:p-6">
//               <div className="mb-5 flex items-center gap-3 border-b border-border pb-4">
//                 <div className="grid h-9 w-9 place-items-center rounded-lg bg-blue-50 text-primary">
//                   <i className="fa-solid fa-boxes-stacked text-sm"></i>
//                 </div>

//                 <div>
//                   <h2 className="font-bold text-dark">
//                     Basic information
//                   </h2>

//                   <p className="mt-0.5 text-xs text-slate-500">
//                     Enter the product details shown in your catalog.
//                   </p>
//                 </div>
//               </div>

//               <div className="grid gap-5 sm:grid-cols-2">
//                 <div className="sm:col-span-2">
//                   <Field
//                     label="Product name"
//                     name="name"
//                     value={form.name}
//                     onChange={handleChange}
//                     placeholder="e.g. Wireless Keyboard"
//                     required
//                   />

//                   {errors.name && (
//                     <p className="mt-1 text-xs text-danger">
//                       {errors.name}
//                     </p>
//                   )}
//                 </div>

//                 <div>
//                   <Field
//                     label="SKU"
//                     name="sku"
//                     value={form.sku}
//                     onChange={handleChange}
//                     placeholder="e.g. NEX-WK-001"
//                     required
//                   />

//                   {errors.sku && (
//                     <p className="mt-1 text-xs text-danger">
//                       {errors.sku}
//                     </p>
//                   )}
//                 </div>

//                 <div>
//                   <SelectField
//                     label="Category"
//                     name="category"
//                     value={form.category}
//                     onChange={handleChange}
//                     options={categories}
//                     placeholder="Select category"
//                     required
//                   />

//                   {errors.category && (
//                     <p className="mt-1 text-xs text-danger">
//                       {errors.category}
//                     </p>
//                   )}
//                 </div>

//                 <div className="sm:col-span-2">
//                   <label className="block">
//                     <span className="mb-1.5 block text-sm font-semibold text-dark">
//                       Description
//                     </span>

//                     <textarea
//                       name="description"
//                       value={form.description}
//                       onChange={handleChange}
//                       rows={4}
//                       placeholder="Write a short description of this product..."
//                       className="w-full resize-none rounded-lg border border-border bg-card px-3 py-3 text-sm text-dark outline-none transition placeholder:text-slate-400 focus:border-primary focus:ring-2 focus:ring-blue-100"
//                     />
//                   </label>
//                 </div>
//               </div>
//             </section>

//             {/* Pricing and Inventory */}
//             <section className="rounded-xl border border-border bg-card p-5 shadow-sm sm:p-6">
//               <div className="mb-5 flex items-center gap-3 border-b border-border pb-4">
//                 <div className="grid h-9 w-9 place-items-center rounded-lg bg-green-50 text-success">
//                   <i className="fa-solid fa-dollar-sign text-sm"></i>
//                 </div>

//                 <div>
//                   <h2 className="font-bold text-dark">
//                     Pricing and inventory
//                   </h2>

//                   <p className="mt-0.5 text-xs text-slate-500">
//                     Set prices and track the available stock.
//                   </p>
//                 </div>
//               </div>

//               <div className="grid gap-5 sm:grid-cols-2">
//                 <div>
//                   <Field
//                     label="Selling price"
//                     name="price"
//                     value={form.price}
//                     onChange={handleChange}
//                     placeholder="0.00"
//                     type="number"
//                     required
//                   />

//                   {errors.price && (
//                     <p className="mt-1 text-xs text-danger">
//                       {errors.price}
//                     </p>
//                   )}
//                 </div>

//                 <Field
//                   label="Cost price"
//                   name="costPrice"
//                   value={form.costPrice}
//                   onChange={handleChange}
//                   placeholder="0.00"
//                   type="number"
//                 />

//                 <div>
//                   <Field
//                     label="Current stock"
//                     name="stock"
//                     value={form.stock}
//                     onChange={handleChange}
//                     placeholder="0"
//                     type="number"
//                     required
//                   />

//                   {errors.stock && (
//                     <p className="mt-1 text-xs text-danger">
//                       {errors.stock}
//                     </p>
//                   )}
//                 </div>

//                 <Field
//                   label="Reorder level"
//                   name="reorderLevel"
//                   value={form.reorderLevel}
//                   onChange={handleChange}
//                   placeholder="e.g. 20"
//                   type="number"
//                 />
//               </div>

//               <div className="mt-5">
//                 <ProfitPreview
//                   price={form.price}
//                   costPrice={form.costPrice}
//                 />
//               </div>
//             </section>

//             {/* Supplier and Status */}
//             <section className="rounded-xl border border-border bg-card p-5 shadow-sm sm:p-6">
//               <div className="mb-5 flex items-center gap-3 border-b border-border pb-4">
//                 <div className="grid h-9 w-9 place-items-center rounded-lg bg-amber-50 text-warning">
//                   <i className="fa-solid fa-tag text-sm"></i>
//                 </div>

//                 <div>
//                   <h2 className="font-bold text-dark">
//                     Supplier and status
//                   </h2>

//                   <p className="mt-0.5 text-xs text-slate-500">
//                     Connect this product to a supplier and choose its status.
//                   </p>
//                 </div>
//               </div>

//               <div className="grid gap-5 sm:grid-cols-2">
//                 <SelectField
//                   label="Supplier"
//                   name="supplier"
//                   value={form.supplier}
//                   onChange={handleChange}
//                   options={suppliers}
//                   placeholder="Select supplier"
//                 />

//                 <label className="block">
//                   <span className="mb-1.5 block text-sm font-semibold text-dark">
//                     Product status
//                   </span>

//                   <select
//                     name="status"
//                     value={form.status}
//                     onChange={handleChange}
//                     className="h-11 w-full rounded-lg border border-border bg-card px-3 text-sm text-dark outline-none transition focus:border-primary focus:ring-2 focus:ring-blue-100"
//                   >
//                     <option value="active">Active</option>
//                     <option value="draft">Draft</option>
//                     <option value="archived">Archived</option>
//                   </select>
//                 </label>
//               </div>
//             </section>
//           </div>

//           {/* Sidebar */}
//           <aside className="space-y-6">

//             {/* Product Media */}
//             <section className="rounded-xl border border-border bg-card p-5 shadow-sm sm:p-6">
//               <div className="mb-5 flex items-center gap-3 border-b border-border pb-4">
//                 <div className="grid h-9 w-9 place-items-center rounded-lg bg-purple-50 text-purple-600">
//                   <i className="fa-solid fa-image text-sm"></i>
//                 </div>

//                 <div>
//                   <h2 className="font-bold text-dark">
//                     Product media
//                   </h2>

//                   <p className="mt-0.5 text-xs text-slate-500">
//                     Add a clear product image.
//                   </p>
//                 </div>
//               </div>

//               <ImageUpload
//                 image={image}
//                 onImageChange={setImage}
//                 onRemove={() => setImage("")}
//               />
//             </section>

//             {/* Inventory Reminder */}
//             <section className="rounded-xl border border-amber-200 bg-amber-50 p-5">
//               <div className="flex gap-3">
//                 <i className="fa-solid fa-triangle-exclamation mt-0.5 text-sm shrink-0 text-warning"></i>

//                 <div>
//                   <h2 className="text-sm font-bold text-dark">
//                     Inventory reminder
//                   </h2>

//                   <p className="mt-1 text-xs leading-5 text-slate-600">
//                     Set a reorder level so you know when this product needs
//                     restocking.
//                   </p>
//                 </div>
//               </div>
//             </section>

//             {/* Required Fields */}
//             <section className="rounded-xl border border-border bg-card p-5 shadow-sm">
//               <h2 className="text-sm font-bold text-dark">
//                 Required fields
//               </h2>

//               <ul className="mt-3 space-y-2 text-xs text-slate-500">
//                 <li className="flex items-center gap-2">
//                   <i className="fa-solid fa-check text-xs text-success"></i>
//                   Product name
//                 </li>

//                 <li className="flex items-center gap-2">
//                   <i className="fa-solid fa-check text-xs text-success"></i>
//                   SKU
//                 </li>

//                 <li className="flex items-center gap-2">
//                   <i className="fa-solid fa-check text-xs text-success"></i>
//                   Category
//                 </li>

//                 <li className="flex items-center gap-2">
//                   <i className="fa-solid fa-check text-xs text-success"></i>
//                   Selling price
//                 </li>

//                 <li className="flex items-center gap-2">
//                   <i className="fa-solid fa-check text-xs text-success"></i>
//                   Current stock
//                 </li>
//               </ul>
//             </section>
//           </aside>
//         </form>
//       </div>
//     </main>
//   );
// }
