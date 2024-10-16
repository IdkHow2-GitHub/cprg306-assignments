//Build the Item Component
//In item.js, create a functional component named Item.
//This component should accept name, quantity, and category as props and display them in a list item element.
//Use Tailwind classes for styling.

export default function Item({ name, quantity, category }) {
  return (
    <li className="flex justify-between items-center p-4 border-b">
      <div>
        <h2 className="text-xl uppercase font-bold">{name}</h2>
        <p className="text-sm italic text-amber-200">
          Buy {quantity} of them from the {category} section.
        </p>
      </div>
    </li>
  );
}
