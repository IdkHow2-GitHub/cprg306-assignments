//Build the Page Component
//In page.js, create a functional component named Page that returns a main element wrapped around an h1 "Shopping List" header
//and the ItemList component. Use Tailwind classes for styling.

import ItemList from "./item-list";

export default function Page() {
    return (
        <main>
            <h1 class="text-3xl font-bold m-2">Shopping List</h1>
            <ItemList />
        </main>
    );
}