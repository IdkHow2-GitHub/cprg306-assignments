// Modify page.js
// In the page.js file, the modifications you'll need to make are as follows:

// Import New Components: You'll need to import the new MealIdeas component at the top of the file. This component is responsible for fetching and displaying meal ideas based on a selected ingredient.
// Additional State Variable: You'll add a new state variable selectedItemName using the useState hook. This state will hold the name of the selected item from the shopping list.
// New Event Handler: You'll create a new event handler function handleItemSelect. This function extracts the name of the selected item, cleans it up, and updates the selectedItemName state. This event handler is passed down to the ItemList component and is called when an item in the list is clicked.

// The item names in the shopping list are not always clean. For example, the item name "chicken breast" is stored as "chicken breast, 1 kg 🍗". For the MealDB API to work properly, we need to clean up the item name by removing the size and emoji. split, trim, and replace functions can be used to clean up the item name. For example, to remove the emojis you could use something like this: text.replace(/([\u2700-\u27BF]|[\uE000-\uF8FF]|�[�-�]|�[�-�]|[\u2011-\u26FF]|�[�-�])/g, '');

// Layout Changes: The layout of the page has been modified to accommodate the new features. The NewItem and ItemList components are grouped together on one side, and the MealIdeas component is placed on the other side. This is achieved by wrapping them in a div with a flex property.
// Passing Props: The ItemList component now receives the onItemSelect prop, which it didn't previously. The MealIdeas component receives selectedItemName as a prop named ingredient.

"use client";
import { useState } from "react";
import itemsData from "./item.json";
import ItemList from "./item-list";
import NewItem from "./new-item";
import MealIdeas from "./meal-ideas";

export default function Page() {
  const [items, setItems] = useState(itemsData);
  const [selectedItemName, setSelectedItemName] = useState("");

  function handleAddItem(newItem) {
    setItems([...items, newItem]);
  }

  function handleItemSelect(itemName) {
    const cleanedItemName = itemName
      .split(",")[0]
      .trim()
      .replace(
        /([\u2700-\u27BF]|[\uE000-\uF8FF]|�[�-�]|�[�-�]|[\u2011-\u26FF]|�[�-�])/g,
        ""
      );
    if (typeof itemName === "string") {
      setSelectedItemName(cleanedItemName);
    } else {
      console.error("Expected a string but received:", itemName);
      setSelectedItemName("");
    }
  }

  return (
    <main>
      <div className="">
        <h1 className="text-3xl font-bold m-2">Shopping List</h1>
        <p className="text-neutral-600 text-sm italic m-2">
          Since this week's page looks very similar to last week's, I'm changing
          the colour scheme for this week only!
        </p>
        <NewItem onAddItem={handleAddItem} />
        <ItemList items={items} onItemSelect={handleItemSelect} />
      </div>
      <div className="">
        <MealIdeas ingredients={selectedItemName} />
      </div>
    </main>
  );
}
