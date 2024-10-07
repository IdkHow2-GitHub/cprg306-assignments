//Build the ItemList Component
//In item-list.js, create a functional component named ItemList.
//Inside this component, copy paste the following item objects each with name, quantity, and category properties.
//Render these items using the Item component you just created, passing item data as props.

import Item from "./items";

const item1 = {
    name: "milk, 4 L 🥛",
    quantity: 1,
    category: "dairy",
  };
   
  const item2 = {
    name: "bread 🍞",
    quantity: 2,
    category: "bakery",
  };
   
  const item3 = {
    name: "eggs, dozen 🥚",
    quantity: 2,
    category: "dairy",
  };
   
  const item4 = {
    name: "bananas 🍌",
    quantity: 6,
    category: "produce",
  };
   
  const item5 = {
    name: "broccoli 🥦",
    quantity: 3,
    category: "produce",
  };
   
  const item6 = {
    name: "chicken breasts, 1 kg 🍗",
    quantity: 1,
    category: "meat",
  };
   
  const item7 = {
    name: "pasta sauce 🍝",
    quantity: 3,
    category: "canned goods",
  };
   
  const item8 = {
    name: "spaghetti, 454 g 🍝",
    quantity: 2,
    category: "dry goods",
  };
   
  const item9 = {
    name: "toilet paper, 12 pack 🧻",
    quantity: 1,
    category: "household",
  };
   
  const item10 = {
    name: "paper towels, 6 pack",
    quantity: 1,
    category: "household",
  };
   
  const item11 = {
    name: "dish soap 🍽️",
    quantity: 1,
    category: "household",
  };
   
  const item12 = {
    name: "hand soap 🧼",
    quantity: 4,
    category: "household",
  };

//to round the corners of something, in the className="" section, write round-xxx.
//the 'xxx' means to change it with something, mainly sm, md, lg, xl, or full, each with their own degree or rounding

export default function ItemList() {
    return (
        <div>
            <ul>
                <li className="p-2 m-4 bg-slate-600 max-w-sm rounded-lg">
                    <h2 className="text-xl uppercase font-bold">{item1.name}</h2>
                    <div className="text-sm italic text-amber-200">Buy {item1.quantity} of them from the {item1.category} section.</div>
                </li>
                <li className="p-2 m-4 bg-slate-600 max-w-sm rounded-lg">
                    <h2 className="text-xl uppercase font-bold">{item2.name}</h2>
                    <div className="text-sm italic text-amber-200">Buy {item2.quantity} of them from the {item2.category} section.</div>
                </li>
                <li className="p-2 m-4 bg-slate-600 max-w-sm rounded-lg">
                    <h2 className="text-xl uppercase font-bold">{item3.name}</h2>
                    <div className="text-sm italic text-amber-200">Buy {item3.quantity} in {item3.category}</div>
                </li>
                <li className="p-2 m-4 bg-slate-600 max-w-sm rounded-lg">
                    <h2 className="text-xl uppercase font-bold">{item4.name}</h2>
                    <div className="text-sm italic text-amber-200">Buy {item4.quantity} in {item4.category}</div>
                </li>
                <li className="p-2 m-4 bg-slate-600 max-w-sm rounded-lg">
                    <h2 className="text-xl uppercase font-bold">{item5.name}</h2>
                    <div className="text-sm italic text-amber-200">Buy {item5.quantity} in {item5.category}</div>
                </li>
                <li className="p-2 m-4 bg-slate-600 max-w-sm rounded-lg">
                    <h2 className="text-xl uppercase font-bold">{item6.name}</h2>
                    <div clclassNamess="text-sm italic text-amber-200">Buy {item6.quantity} in {item6.category}</div>
                </li>
                <li className="p-2 m-4 bg-slate-600 max-w-sm rounded-lg">
                    <h2 className="text-xl uppercase font-bold">{item7.name}</h2>
                    <div className="text-sm italic text-amber-200">Buy {item7.quantity} in {item7.category}</div>
                </li>
                <li className="p-2 m-4 bg-slate-600 max-w-sm rounded-lg">
                    <h2 className="text-xl uppercase font-bold">{item8.name}</h2>
                    <div className="text-sm italic text-amber-200">Buy {item8.quantity} in {item8.category}</div>
                </li>
                <li className="p-2 m-4 bg-slate-600 max-w-sm rounded-lg">
                    <h2 className="text-xl uppercase font-bold">{item9.name}</h2>
                    <div className="text-sm italic text-amber-200">Buy {item9.quantity} in {item9.category}</div>
                </li>
                <li className="p-2 m-4 bg-slate-600 max-w-sm rounded-lg">
                    <h2 className="text-xl uppercase font-bold">{item10.name}</h2>
                    <div className="text-sm italic text-amber-200">Buy {item10.quantity} in {item10.category}</div>
                </li>
                <li className="p-2 m-4 bg-slate-600 max-w-sm rounded-lg">
                    <h2 className="text-xl uppercase font-bold">{item11.name}</h2>
                    <div className="text-sm italic text-amber-200">Buy {item11.quantity} in {item11.category}</div>
                </li>
                <li className="p-2 m-4 bg-slate-600 max-w-sm rounded-lg">
                    <h2 className="text-xl uppercase font-bold">{item12.name}</h2>
                    <div className="text-sm italic text-amber-200">Buy {item12.quantity} in {item12.category}</div>
                </li>
            </ul>
        </div>
    );
}
