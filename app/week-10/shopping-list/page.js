"use client";
import { useState } from "react";
import ItemList from "./item-list";
import NewItem from "./new-item";
import MealIdeas from "./meal-ideas";

export default function Page() {
  const itemsData = []; // i want an empty grocery list to start
  const [items, setItems] = useState(itemsData);
  const [selectedItemName, setSelectedItemName] = useState("");

  function handleAddItem(newItem) {
    setItems([...items, newItem]);
  }

  function handleItemSelect(itemName) {
    const cleanedItemName = itemName
      .split(",")[0]
      .replace(
        /(_[\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g,
        ""
      )
      .trim()
      .replace(" ", "_");
    if (typeof cleanedItemName === "string") {
      setSelectedItemName(cleanedItemName);
      console.log("Selected item:", cleanedItemName);
    } else {
      console.error("Expected a string but received:", itemName);
      setSelectedItemName("");
    }
  }

  return (
    <main>
      <h1 className="text-3xl font-bold m-2">Shopping List</h1>
      <div className="flex w-full">
        <div className="flex justify-between">
          <div>
            <NewItem className="flex-1" onAddItem={handleAddItem} />
            <ItemList
              className="flex-col"
              items={items}
              onItemSelect={handleItemSelect}
            />
          </div>
          <MealIdeas ingredients={selectedItemName} />
        </div>
      </div>
    </main>
  );
}
