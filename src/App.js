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
      "https://hips.hearstapps.com/hmg-prod/images/classic-cheese-pizza-recipe-2-64429a0cb408b.jpg?crop=0.8888888888888888xw:1xh;center,top&resize=1200:*",
    ingredients: [
      "100 ml tomato ketchup",
      "1 tomato",
      "2 onion",
       "1 teaspoon chilli flakes",
      "1 teaspoon baking powder",
      "1 teaspoon sugar",
      "2 teaspoon virgin olive oil",
      "100 gm processed cheese",
      "4 mushroom",
      "1/2 capsicum (green pepper)",
      "1 teaspoon oregano",
      "1/2 cup mozzarella",
      "1 tablespoon dry yeast",
      "water as required",
      "2 large eggs",
      "50g Pecorino Romano cheese, grated",
      "Salt and black pepper to taste",
    ],
    steps: [
      "Prepare the pizza dough",
      "Prepare the pizza sauce",
      "Preheat the oven",
      "Shape and assemble the pizza",
      "Bake the pizza",
      "Remove and serve"
    ],
    preparationTime: 10,
    cookingTime: 5,
  },
  {
    id: 3,
    name: "Burger",
    description: "Burger with tomato sauce and cheese  ",
    imageUrl:
      "https://sundaysuppermovement.com/wp-content/uploads/2021/10/loaded-burgers-featured.jpg",
    ingredients: [
      "Burger buns",
      "Beef patty",
      "Tomato sauce",
      "Cheese",
      "Lettuce",
      "Tomato slices",
      "Onion slices",
      "Pickles"
    ],
    steps: [
      "Toast the burger buns",
      "Cook the beef patty",
      "Spread tomato sauce on the bottom bun",
      "Place the cooked beef patty on top",
      "Add a slice of cheese on top of the patty",
      "Add lettuce, tomato slices, and onion slices",
      "Place the top bun on the assembled ingredients",
      "Enjoy your delicious burger!"
    ],
    preparationTime: 10,
    cookingTime: 5,
  },
  {
    id: 4,
    name: "Sushi",
    description: "Sushi",
    imageUrl:
      "https://img.freepik.com/free-photo/fresh-seafood-collection-sushi-plate-with-variety-generated-by-ai_188544-13383.jpg?w=2000",
    ingredients: [
      "Sushi rice",
      "Nori (seaweed)",
      "Fresh fish or seafood",
      "Vegetables (e.g., cucumber, avocado)",
      "Soy sauce",
      "Wasabi",
      "Pickled ginger"
    ],
    steps: [
      "Cook sushi rice according to package instructions",
    "Prepare the ingredients: slice the fish or seafood, cut vegetables into thin strips",
    "Lay a sheet of nori (seaweed) on a bamboo sushi mat or flat surface",
    "Spread a thin layer of sushi rice on the nori, leaving a small border at the top",
    "Place the fish or seafood and vegetables in a line across the middle of the rice",
    "Roll the sushi tightly using the bamboo mat or your hands",
    "Slice the sushi roll into bite-sized pieces",
    "Serve with soy sauce, wasabi, and pickled ginger"
    ],
    preparationTime: 10,
    cookingTime: 5,
  },
  {
    id: 5,
    name: "Oysters",
    description: "Delicious Oysters",
    imageUrl:
      "https://www.wideopencountry.com/wp-content/uploads/sites/4/2020/05/oyster-recipes.png?fit=1200%2C800",
    ingredients: [
      "Fresh oysters",
      "Lemon wedges",
      "Cocktail sauce",
      "Mignonette sauce",
      "Hot sauce",
      "Tabasco sauce",
      "Saltine crackers",
      "Ice"
    ],
    steps: [
      "Clean the oysters thoroughly under cold water",
      "Shuck the oysters by inserting an oyster knife into the hinge and twisting",
      "Slide the knife along the top shell to detach the oyster",
      "Remove any bits of shell and debris from the oyster",
      "Serve the oysters on a bed of crushed ice",
      "Garnish with lemon wedges",
      "Serve with cocktail sauce, mignonette sauce, hot sauce, and saltine crackers",
      "Enjoy your freshly prepared oysters!"
    ],
    preparationTime: 10,
    cookingTime: 5,
  },
  {
    id: 6,
    name: "Salad",
    description: "Salad with tomato sauce and cheese",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGlI-kblEhh_NbljlmxThuSTBBXkWbiNxnd6M7vFCc40C1QpNp6OB268iK0yw5_BkuXZU&usqp=CAU",
    ingredients: [
      "Lettuce",
      "Tomato slices",
      "Cucumber slices",
      "Red onion slices",
      "Olives",
      "Cheese",
      "Croutons",
      "Tomato sauce"
    ],
    steps: [
      "Wash and chop lettuce into bite-sized pieces",
      "Slice tomatoes, cucumbers, and red onions",
      "Add lettuce, tomatoes, cucumbers, red onions, and olives to a mixing bowl",
      "Sprinkle cheese and croutons over the salad",
      "Drizzle tomato sauce over the salad",
      "Toss the salad gently to combine all the ingredients",
      "Serve and enjoy your delicious salad!"
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
