//Build the Item Component
//In item.js, create a functional component named Item.
//This component should accept name, quantity, and category as props and display them in a list item element.
//Use Tailwind classes for styling.

export default function Item({ name, quantity, category }) {
    return (
        <li className="flex justify-between items-center p-4 border-b">
            <div>
                <h2 className="text-lg font-bold">{name}</h2>
                <p className="text-sm">{category}</p>
            </div>
            <p className="text-sm">{quantity}</p>
        </li>
    );
}   