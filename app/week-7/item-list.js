"use client";
import { useState } from "react";
import Item from "./items";

export default function ItemList({ items }) {
  const [sortBy, setSortBy] = useState("name");

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
