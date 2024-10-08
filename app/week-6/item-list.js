// Initialize State Variable
// Use the useState hook to create a state variable sortBy and its setter function setSortBy. This will be used to determine the sorting preference of the user.
// Set the initial value of sortBy to "name", indicating that the list should initially be sorted by name.
// Sort the Items
// Use JavaScript's sort function to sort the items array based on the sortBy state variable.
// If sortBy is "name", sort the items by their name property.
// If sortBy is "category", sort the items by their category property.
// Create Sort Buttons
// Create two buttons that allow the user to change the value of sortBy to "name" or "category". These buttons should change the sorting of the items when clicked.
// Use the setSortBy function in the onClick event handlers of these buttons to change the value of sortBy.
// Use conditional rendering to change the background color of the buttons based on the current value of sortBy. This gives the user a visual indication of what the current sorting preference is.
// Render the Items
// Use the map function to create a new Item component for each item in the items array. Don't forget to provide a unique key prop for each Item (you can use the item's id for this purpose).
"use client";
import { useState } from "react";
import itemData from "./item.json";
import Item from "./items";

export default function ItemList() {
  const [sortBy, setSortBy] = useState("name");

  const [items, setItems] = useState(itemData);

  const sortedItems = [...items].sort((a, b) => {
    if (sortBy === "name") {
      return a.name.localeCompare(b.name);
    } else {
      return a.category.localeCompare(b.category);
    }
  });
  //className="m-2 font-black p-2 outline-4 outline rounded-lg text-white outline-green-300 bg-green-500 hover:bg-blue-700 hover:outline-blue-400"
  return (
    <div>
      <button
        className={`m-2 font-black p-2 outline-4 outline rounded-lg text-white outline-green-300 bg-green-500 hover:bg-blue-700 hover:outline-blue-400 ${
          sortBy === "name"
            ? "outline-green-300 bg-green-500"
            : "outline-slate-500 bg-slate-700"
        } rounded-lg`}
        onClick={() => setSortBy("name")}
      >
        Sort by Name
      </button>
      <button
        className={`m-2 font-black p-2 outline-4 outline rounded-lg text-white outline-green-300 bg-green-500 hover:bg-blue-700 hover:outline-blue-400 ${
          sortBy === "category"
            ? "outline-green-300 bg-green-500"
            : "outline-slate-500 bg-slate-700"
        } rounded-lg`}
        onClick={() => setSortBy("category")}
      >
        Sort by Category
      </button>
      <ul className="p-2 m-4 bg-slate-600 max-w-sm rounded-lg">
        {sortedItems.map((item) => (
          <Item
            className=""
            name={item.name}
            quantity={item.quantity}
            category={item.category}
          />
        ))}
      </ul>
    </div>
  );
}
