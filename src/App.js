import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { RecipesPage } from "./RecipesPage";
import { RecipeDetailPage } from "./RecipeDetailPage";

import "./App.css";

const recipes = [
  {
    id: 1,
    name: "Pasta",
    description: "Pasta with tomato sauce",
    imageUrl:
      "https://images.pexels.com/photos/1487511/pexels-photo-1487511.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    ingredients: [
      "200g spaghetti",
      "100g guanciale or pancetta, diced",
      "2 large eggs",
      "50g Pecorino Romano cheese, grated",
      "Salt and black pepper to taste",
    ],
    steps: [
      "Bring a large pot of salted water to a boil. Add spaghetti and cook until al dente. Drain and set aside.",
      "In a skillet, cook the guanciale or pancetta until crispy. Remove from heat and set aside.",
      "In a bowl, whisk together eggs, grated Pecorino Romano cheese, salt, and black pepper.",
      "Add cooked spaghetti to the skillet with the guanciale. Pour the egg mixture over the spaghetti and toss quickly to combine. The heat will cook the eggs and create a creamy sauce.",
      "Serve immediately with additional grated cheese and black pepper on top.",
    ],
    preparationTime: 10,
    cookingTime: 5,
  },
  {
    id: 2,
    name: "Pizza",
    description: "Pizza with tomato sauce and cheese",
    imageUrl:
      "https://images.pexels.com/photos/1487511/pexels-photo-1487511.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    ingredients: [
      "200g spaghetti",
      "100g guanciale or pancetta, diced",
      "2 large eggs",
      "50g Pecorino Romano cheese, grated",
      "Salt and black pepper to taste",
    ],
    steps: [
      "Bring a large pot of salted water to a boil. Add spaghetti and cook until al dente. Drain and set aside.",
      "In a skillet, cook the guanciale or pancetta until crispy. Remove from heat and set aside.",
      "In a bowl, whisk together eggs, grated Pecorino Romano cheese, salt, and black pepper.",
      "Add cooked spaghetti to the skillet with the guanciale. Pour the egg mixture over the spaghetti and toss quickly to combine. The heat will cook the eggs and create a creamy sauce.",
      "Serve immediately with additional grated cheese and black pepper on top.",
    ],
    preparationTime: 10,
    cookingTime: 5,
  },
  {
    id: 3,
    name: "Burger",
    description: "Burger with tomato sauce and cheese  ",
    imageUrl:
      "https://images.pexels.com/photos/1487511/pexels-photo-1487511.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    ingredients: [
      "200g spaghetti",
      "100g guanciale or pancetta, diced",
      "2 large eggs",
      "50g Pecorino Romano cheese, grated",
      "Salt and black pepper to taste",
    ],
    steps: [
      "Bring a large pot of salted water to a boil. Add spaghetti and cook until al dente. Drain and set aside.",
      "In a skillet, cook the guanciale or pancetta until crispy. Remove from heat and set aside.",
      "In a bowl, whisk together eggs, grated Pecorino Romano cheese, salt, and black pepper.",
      "Add cooked spaghetti to the skillet with the guanciale. Pour the egg mixture over the spaghetti and toss quickly to combine. The heat will cook the eggs and create a creamy sauce.",
      "Serve immediately with additional grated cheese and black pepper on top.",
    ],
    preparationTime: 10,
    cookingTime: 5,
  },
  {
    id: 4,
    name: "Pasta",
    description: "Pasta with tomato sauce",
    imageUrl:
      "https://images.pexels.com/photos/1487511/pexels-photo-1487511.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    ingredients: [
      "200g spaghetti",
      "100g guanciale or pancetta, diced",
      "2 large eggs",
      "50g Pecorino Romano cheese, grated",
      "Salt and black pepper to taste",
    ],
    steps: [
      "Bring a large pot of salted water to a boil. Add spaghetti and cook until al dente. Drain and set aside.",
      "In a skillet, cook the guanciale or pancetta until crispy. Remove from heat and set aside.",
      "In a bowl, whisk together eggs, grated Pecorino Romano cheese, salt, and black pepper.",
      "Add cooked spaghetti to the skillet with the guanciale. Pour the egg mixture over the spaghetti and toss quickly to combine. The heat will cook the eggs and create a creamy sauce.",
      "Serve immediately with additional grated cheese and black pepper on top.",
    ],
    preparationTime: 10,
    cookingTime: 5,
  },
  {
    id: 5,
    name: "Pizza",
    description: "Pizza with tomato sauce and cheese",
    imageUrl:
      "https://images.pexels.com/photos/1487511/pexels-photo-1487511.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    ingredients: [
      "200g spaghetti",
      "100g guanciale or pancetta, diced",
      "2 large eggs",
      "50g Pecorino Romano cheese, grated",
      "Salt and black pepper to taste",
    ],
    steps: [
      "Bring a large pot of salted water to a boil. Add spaghetti and cook until al dente. Drain and set aside.",
      "In a skillet, cook the guanciale or pancetta until crispy. Remove from heat and set aside.",
      "In a bowl, whisk together eggs, grated Pecorino Romano cheese, salt, and black pepper.",
      "Add cooked spaghetti to the skillet with the guanciale. Pour the egg mixture over the spaghetti and toss quickly to combine. The heat will cook the eggs and create a creamy sauce.",
      "Serve immediately with additional grated cheese and black pepper on top.",
    ],
    preparationTime: 10,
    cookingTime: 5,
  },
  {
    id: 6,
    name: "Salad",
    description: "Salad with tomato sauce and cheese",
    imageUrl:
      "https://images.pexels.com/photos/1487511/pexels-photo-1487511.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    ingredients: [
      "200g spaghetti",
      "100g guanciale or pancetta, diced",
      "2 large eggs",
      "50g Pecorino Romano cheese, grated",
      "Salt and black pepper to taste",
    ],
    steps: [
      "Bring a large pot of salted water to a boil. Add spaghetti and cook until al dente. Drain and set aside.",
      "In a skillet, cook the guanciale or pancetta until crispy. Remove from heat and set aside.",
      "In a bowl, whisk together eggs, grated Pecorino Romano cheese, salt, and black pepper.",
      "Add cooked spaghetti to the skillet with the guanciale. Pour the egg mixture over the spaghetti and toss quickly to combine. The heat will cook the eggs and create a creamy sauce.",
      "Serve immediately with additional grated cheese and black pepper on top.",
    ],
    preparationTime: 3,
    cookingTime: 25,
  },
];

const router = createBrowserRouter([
  {
    path: "/",
    element: <RecipesPage recipes={recipes} />,
  },
  {
    path: "recipe/:recipeId",
    element: <RecipeDetailPage recipes={recipes} />,
  },
]);

function App() {
  return (
    <div className="app">
      <RouterProvider router={router} />
      <div className="gap"></div>
      <footer className="footer">
        <h4>@Theo Minni</h4>
      </footer>
    </div>
  );
}

export default App;
