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
    <div className="justify-center">
      <h2 className="m-2 font-black p-2 outline-4 outline rounded-lg text-white text-center max-w-52 outline-green-300 bg-green-500">
        Meal Ideas
      </h2>
      <ul className="p-2 m-4 bg-slate-600 max-w-sm rounded-lg">
        {meals.map((meal) => (
          <li key={meal.idMeal}>{meal.strMeal}</li>
        ))}
      </ul>
    </div>
  );
}
