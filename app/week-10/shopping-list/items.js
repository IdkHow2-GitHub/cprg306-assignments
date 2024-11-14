export default function Item({ name, quantity, category, onSelect }) {
  return (
    <li
      className="flex justify-between items-center p-4 border-b hover:bg-amber-900 hover:text-yellow-200"
      onClick={onSelect}
    >
      <div>
        <h2 className="text-xl uppercase font-bold">{name}</h2>
        <p className="text-sm italic text-amber-200">
          Buy {quantity} of them from the {category} section.
        </p>
      </div>
    </li>
  );
}
