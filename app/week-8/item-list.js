// Modify item-list.js
// Import Necessary Hooks: Start by importing the necessary React hooks at the top of your file. You'll be using the useState hook.

// Update Component Definition: Begin defining your ItemList functional component. In addition to the items prop from Week 6, this component should now also receive an onItemSelect prop.

// Update Render Method: The rendering of sorting buttons remains the same. The change is in rendering the list items. Now, each Item component should be clickable and trigger the onItemSelect function with the respective item as an argument. This is achieved by passing the onSelect prop to each Item component.

"use client";
import { useState } from "react";
import Item from "./items";

export default function ItemList({ items = [], onItemSelect }) {
  const [sortBy, setSortBy] = useState("name");

  const sortedItems = Array.isArray(items)
    ? [...items].sort((a, b) => {
        if (sortBy === "name") {
          return a.name.localeCompare(b.name);
        } else {
          return a.category.localeCompare(b.category);
        }
      })
    : [];

  //className="m-2 font-black p-2 outline-4 outline rounded-lg text-white outline-yellow-300 bg-yellow-500 hover:bg-blue-700 hover:outline-blue-400"
  return (
    <div>
      <button
        className={`m-2 font-black p-2 outline-4 outline rounded-lg text-white outline-yellow-300 bg-yellow-500 hover:bg-blue-700 hover:outline-blue-400 ${
          sortBy === "name"
            ? "outline-yellow-300 bg-yellow-500"
            : "outline-stone-500 bg-stone-700"
        } rounded-lg`}
        onClick={() => setSortBy("name")}
      >
        Sort by Name
      </button>
      <button
        className={`m-2 font-black p-2 outline-4 outline rounded-lg text-white outline-yellow-300 bg-yellow-500 hover:bg-blue-700 hover:outline-blue-400 ${
          sortBy === "category"
            ? "outline-yellow-300 bg-yellow-500"
            : "outline-stone-500 bg-stone-700"
        } rounded-lg`}
        onClick={() => setSortBy("category")}
      >
        Sort by Category
      </button>
      <ul className="p-2 m-4 bg-stone-600 max-w-sm rounded-lg">
        {sortedItems.map((item) => (
          <Item
            name={item.name}
            quantity={item.quantity}
            category={item.category}
            onSelect={() => onItemSelect(item.name)}
          />
        ))}
      </ul>
    </div>
  );
}
// "use client";
// import { useState } from "react";
// import Item from "./items";

// export default function ItemList({ items = [], onItemSelect }) {
//   const [sortBy, setSortBy] = useState("name");

//   // Ensure that items is an array
//   const sortedItems = Array.isArray(items)
//     ? [...items].sort((a, b) => {
//         if (sortBy === "name") {
//           return a.name.localeCompare(b.name);
//         } else {
//           return a.category.localeCompare(b.category);
//         }
//       })
//     : [];

//   return (
//     <div>
//       <button
//         className={`m-2 font-black p-2 outline-4 outline rounded-lg text-white outline-yellow-300 bg-yellow-500 hover:bg-blue-700 hover:outline-blue-400 ${
//           sortBy === "name"
//             ? "outline-yellow-300 bg-yellow-500"
//             : "outline-stone-500 bg-stone-700"
//         } rounded-lg`}
//         onClick={() => setSortBy("name")}
//       >
//         Sort by Name
//       </button>
//       <button
//         className={`m-2 font-black p-2 outline-4 outline rounded-lg text-white outline-yellow-300 bg-yellow-500 hover:bg-blue-700 hover:outline-blue-400 ${
//           sortBy === "category"
//             ? "outline-yellow-300 bg-yellow-500"
//             : "outline-stone-500 bg-stone-700"
//         } rounded-lg`}
//         onClick={() => setSortBy("category")}
//       >
//         Sort by Category
//       </button>
//       <ul
//         className="p-2 m-4 bg-stone-600 max-w-sm rounded-lg"
//         onSelect={onItemSelect}
//       >
//         {sortedItems.map((item, index) => (
//           <Item
//             key={index}
//             className=""
//             name={item.name}
//             quantity={item.quantity}
//             category={item.category}
//           />
//         ))}
//       </ul>
//     </div>
//   );
// }
