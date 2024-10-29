"use client";
import { useState } from "react";

export default function NewItem({ onAddItem }) {
  //item name section
  const [name, setName] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    const newItem = {
      id: Math.random().toString(36).substr(2, 9),
      name: name,
      quantity: quantity,
      category: category,
    };
    onAddItem(newItem);
    setName("");
    setQuantity(1);
    setCategory("produce");
  }
  //counter section
  const [quantity, setQuantity] = useState(1);

  function increment() {
    if (quantity < 20) {
      setQuantity(quantity + 1);
    }
  }

  function decrement() {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  }
  //category dropdown
  const [category, setCategory] = useState("produce");

  return (
    <main className="flex w-full">
      <div className="p-2 m-4 bg-slate-600 rounded-lg">
        {/* item name section */}
        <form className="flex justify-between">
          <input
            type="text"
            required
            className="m-2 h-10 p-4 outline-4 outline outline-amber-200 rounded-lg bg-slate-900"
            placeholder="Item name"
            value={name}
            onChange={(event) => setName(event.target.value)}
          ></input>
          <button
            className="m-2 font-black p-2 outline-4 outline outline-green-300 rounded-lg bg-green-500 text-white hover:bg-blue-700 hover:outline-blue-400"
            onClick={handleSubmit}
          >
            Add to List
          </button>
        </form>
        <div className="flex justify-between">
          {/* counter section */}
          <div className="p-5 m-2 bg-slate-900 max-w-sm rounded-lg">
            <p className="bg-cyan-900 p-2 rounded-lg m-1 text-xl uppercase font-bold">
              Quantity
            </p>
            <p className="p-2 flex justify-center text-xl italic text-amber-200">
              {quantity}
            </p>
            <div className="flex justify-between">
              {/* decrement */}
              <button
                className="font-black w-8 bg-orange-800 text-white rounded-lg shadow-md
                            hover:bg-blue-700 focus:outline-none focus:ring-2 disabled:bg-gray-400 focus:ring-blue-400 focus:ring-opacity-75"
                onClick={decrement}
                disabled={quantity === 1}
              >
                -
              </button>
              {/* increment */}
              <button
                className="font-black w-8 bg-green-500 text-white rounded-lg shadow-md
                            hover:bg-blue-700 focus:outline-none focus:ring-2 disabled:bg-gray-400 focus:ring-blue-400 focus:ring-opacity-75"
                onClick={increment}
                disabled={quantity === 999999999}
              >
                +
              </button>
            </div>
          </div>
          {/* category dropdown */}
          <div className="p-5 m-2 bg-slate-900 max-w-sm rounded-lg">
            <p className="bg-cyan-900 p-2 rounded-lg m-1 text-xl uppercase font-bold">
              Category
            </p>
            <select
              className="bg-slate-600 p-2 rounded-lg flex justify-center text-xl italic text-amber-200"
              value={category}
              onChange={(event) => setCategory(event.target.value)}
            >
              <option value="Produce">Produce</option>
              <option value="dairy">Dairy</option>
              <option value="bakery">Bakery</option>
              <option value="meat">Meat</option>
              <option value="frozen foods">Frozen Foods</option>
              <option value="canned goods">Canned Goods</option>
              <option value="dry goods">Dry Goods</option>
              <option value="beverages">Beverages</option>
              <option value="snacks">Snacks</option>
              <option value="household">Household</option>
              <option value="other">Other</option>
            </select>
          </div>
        </div>
      </div>
    </main>
  );
}
