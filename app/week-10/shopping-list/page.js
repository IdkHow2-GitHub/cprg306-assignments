// Import the shopping-list-service.js file
// In shopping-list/page.js, import getItems and addItem functions from the shopping-list-service.js file.

// Also import useEffect from React.

// Get the shopping list
// Create an async function loadItems. Inside this function, call the getItems function to get the shopping list items for the current user using user.uid as the userId. Use setItems to set the state of items to the result of getItems.

// Add the useEffect hook
// Add the useEffect hook to the ShoppingList component. The useEffect hook will call the loadItems function when the component is mounted. Determine what the dependencies should be for the useEffect hook.

// Handle adding an item
// Update the handleAddItem function to call the addItem function to add the item to the shopping list. Use user.uid as the userId parameter. Use the id returned from addItem to set the id of the new item. Use setItems to set the state of items to include the new item.

"use client";
import { useState } from "react";
import ItemList from "./item-list";
import NewItem from "./new-item";
import MealIdeas from "./meal-ideas";
import { getItems, addItem } from "../_services/shopping-list-service";
import { useEffect } from "react";
import { useUserAuth } from "../_utils/auth-context";
import Link from "next/link";

export default function Page() {
  const [items, setItems] = useState([]);
  const [selectedItemName, setSelectedItemName] = useState("");
  const { user } = useUserAuth();

  const loadItems = async () => {
    try {
      if (user?.uid) {
        const fetchedItems = await getItems(user.uid);
        setItems(fetchedItems);
      }
    } catch (error) {
      console.error("Error loading items:", error);
    }
  }
  useEffect(() => {
    loadItems();
  }, [user?.uid]);

  const handleAddItem = async (newItem) => {
    try{
      if (user?.uid) {
        const itemId = await addItem(user.uid, newItem);
        setItems([...items, { id: itemId, ...newItem }]);
      }
    } catch (error) {
      console.error("Error adding item:", error);
    }
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
      <div className="">
        <h1 className="text-3xl font-bold m-2">Shopping List</h1>
        <Link className="text-1xl italic font-bold text-amber-200 m-2" href="../week-10">Go Back</Link>
      </div>
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
