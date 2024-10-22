// Create meal-ideas.js
// The MealIdeas component is responsible for fetching and displaying meal ideas based on a selected shopping list item. Here are a few things to keep in mind when creating this component.

// Import Necessary Hooks and Begin Component Definition
// Since this component uses useState and useEffect, start with the "use client" directive.
// Import the useEffect and useState hooks from react.
// This component should receive a single prop: ingredient.

// Define State Variables
// Inside your component, define a state variable using the useState hook: meals. meals will hold the list of meal ideas fetched from the API. Initialize it to an empty array.

// Define API Fetching Function
// Next, outside your component, define a function called fetchMealIdeas, which fetch data from the API. fetchMealIdeas should take an ingredient as a parameter, make a fetch request to the TheMealDB API, and return the meals that include that ingredient.
// The API endpoint for fetching meal ideas is: https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}. For example, if the ingredient is "chicken", the API endpoint would be: https://www.themealdb.com/api/json/v1/1/filter.php?i=chicken. The API returns a list of meals that include the specified ingredient. Each meal has three properties:
// idMeal: id of the meal
// strMeal: name of the meal
// strMealThumb: URL of an image of the meal

// Define Load Function
// Next, inside your component, define a function called loadMealIdeas. This function should call fetchMealIdeas with the ingredient prop and store the result in the meals state variable.
// Use the useEffect Hook
// Use the useEffect hook to call loadMealIdeas whenever the ingredient prop changes.
// Render the Component
// Finally, define your component's render method. This should return a div that includes a header and a list of meals. Each meal should be a list item that displays the meal's name.

"use client";

import { useState, useEffect } from "react";

async function fetchMealIdeas(ingredient) {
  const response = await fetch(
    `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`
  );
  const data = await response.json();
  return data.meals || [];
}

export default function MealIdeas({ ingredients }) {
  const [meals, setMeals] = useState([]);

  const loadMealIdeas = async () => {
    const mealIdeas = await fetchMealIdeas(ingredients);
    setMeals(mealIdeas);
  };

  useEffect(() => {
    loadMealIdeas();
  }, [ingredients]);

  return (
    <div>
      <h2>Meal Ideas</h2>
      <ul>
        {meals.map((meal) => (
          <li key={meal.idMeal}>{meal.strMeal}</li>
        ))}
      </ul>
    </div>
  );
}
