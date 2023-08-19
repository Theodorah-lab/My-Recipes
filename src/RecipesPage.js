import { useNavigate } from "react-router-dom";

export function RecipesPage({ recipes }) {
  const navigate = useNavigate();

  return (
    <>
      <h1 className="title">Embarking on a Flavorful Journey Through Taste</h1>
      <div className="recipe-container">
        {recipes.map((recipe) => (
          <div className="recipe" key={recipe.id}>
            <div className="image-wrapper">
              <img src={recipe.imageUrl} alt="Recipe"></img>
              <span
                className="recipe-button"
                onClick={() => navigate({ pathname: "/recipe/" + recipe.id })}
              >
                Details
              </span>
            </div>
            <h2 className="recipe-name">{recipe.name}</h2>
            <p className="recipe-description">{recipe.description}</p>
          </div>
        ))}
      </div>
    </>
  );
}
