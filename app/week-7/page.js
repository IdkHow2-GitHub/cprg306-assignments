//Import the NewItem and ItemList components.
// Import items.json as itemsData.
// Initialize a state variable (e.g., items) with the data from items.json.
// Create an event handler function (e.g., handleAddItem) that adds a new item to items.
// In your render function, display both the NewItem and ItemList components.
// Pass the handleAddItem event handler to the NewItem component as a prop called onAddItem.
// Pass the items state to the ItemList component as a prop.
// Add the "use client" directive at the top of the file.

"use client";
import { useState } from "react";
import itemsData from "./item.json";
import ItemList from "./item-list";
import NewItem from "./new-item";

export default function Page() {
  const [items, setItems] = useState(itemsData);

  function handleAddItem(newItem) {
    setItems([...items, newItem]);
  }

  return (
    <main>
      <h1 className="text-3xl font-bold m-2">Shopping List</h1>
      <NewItem onAddItem={handleAddItem} />
      <ItemList items={items} />
    </main>
  );
}
