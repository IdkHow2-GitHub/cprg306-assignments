// Modify item.js
// The changes in the item.js file from Week 6 to Week 7 are relatively straightforward with just one main change. The goal is to make each item in the list clickable so that when a user clicks on an item, it can trigger an action in the parent component.

// Update Component Definition: Update your Item functional component's definition to accept an additional prop called onSelect.

// Add onClick Handler to List Item: In the returned JSX, add the onClick prop. This makes the entire list item clickable and the provided onSelect function will be triggered when a user clicks on the item.

export default function Item({ name, quantity, category, onSelect }) {
  return (
    <li
      className="flex justify-between items-center p-4 border-b hover:bg-amber-900 hover:text-yellow-200"
      onClick={onSelect}
    >
      <div>
        <h2 className="text-xl uppercase font-bold">{name}</h2>
        <p className="text-sm italic text-red-500">
          Buy {quantity} of them from the {category} section.
        </p>
      </div>
    </li>
  );
}
