//Setup NewItem Component
// Add the "use client" directive to the top of the file.
// Import the useState hook from React.
// Initialize State Variables
// Quantity

// Use the useState hook to create a state variable called quantity and a setter function called setQuantity.
// The initial value of quantity should be 1, indicating that the quantity field is initially set to 1.
// Create increment and decrement Functions
// Create a function called increment that increments the quantity state variable by 1. Ensure that the quantity does not exceed 20.
// Create a function called decrement that decrements the quantity state variable by 1. Ensure that the quantity does not go below 1.
// Don't forget to never modify the state directly. Always use the setter function provided by the useState hook, i.e. setQuantity.

// Render the Component
// In the return statement of your function, render the following:

// The current quantity value.
// Decrement button
// The button should call the decrement function when clicked.
// The button should be disabled if the quantity is 1 to indicate to the user that the quantity cannot go below 1.
// Increment button
// The button should call the increment function when clicked.
// The button should be disabled if the quantity is 20 to indicate to the user that the quantity cannot exceed 20.


"use client";
import { useState } from "react";

export default function NewItem() {
    const [quantity, setQuantity] = useState(1);
    
    function increment() {
        if (quantity < 20) {
        setQuantity(quantity + 1);
        }
    }
    
    function decrement() {
        if (quantity > 1) {
        setQuantity(quantity - 1);
        }
    }
    
    return (
        <main className="flex justify-center w-full">
                <div className="p-2 pl-5 pr-5 m-4 bg-slate-600 max-w-sm rounded-lg">
                    <p className="text-xl uppercase font-bold">Quantity</p>
                    <p className="flex justify-center text-xl italic text-amber-200">{quantity}</p>
                    <div className="flex justify-between">
                        {/* decrement */}
                    <button className="font-black w-8 bg-red-500 text-white rounded-lg shadow-md
                     hover:bg-blue-700 focus:outline-none focus:ring-2 disabled:bg-gray-400 focus:ring-blue-400 focus:ring-opacity-75" 
                     onClick={decrement} disabled={quantity === 1}>-</button>
                        {/* increment */}
                    <button className="font-black w-8 bg-green-500 text-white rounded-lg shadow-md
                     hover:bg-blue-700 focus:outline-none focus:ring-2 disabled:bg-gray-400 focus:ring-blue-400 focus:ring-opacity-75" 
                     onClick={increment} disabled={quantity === 20}>+</button>
                </div>
            </div>
        </main>
    );
}

