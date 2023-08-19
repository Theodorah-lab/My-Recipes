import { useNavigate, useParams } from "react-router-dom";

export function RecipeDetailPage({ recipes }) {
  const { recipeId } = useParams();
  const navigation = useNavigate();
  const recipe = recipes.find((recipe) => recipe.id === Number(recipeId));

  return (
    <>
      <span className="go-back-button" onClick={() => navigation("/")}>
        Recipes
      </span>
      <div className="recipe-detail">
        <div className="recipe-detail-container">
          <h1>{recipe.name}</h1>
          <h4 className="recipe-detail-description">{recipe.description}</h4>
          <div className="recipe-image-container">
            <img
              className="recipe-detail-image"
              src={recipe.imageUrl}
              alt="Recipe"
            ></img>
            <div className="recipe-time">
              <div className="recipe-time-item">
                <h4>Prep</h4>
                <h6>{recipe.preparationTime} min</h6>
              </div>
              <div className="divider-line"></div>
              <div className="recipe-time-item">
                <h4>Cook</h4>
                <h6>{recipe.cookingTime} min</h6>
              </div>
              <div className="divider-line"></div>
              <div className="recipe-time-item">
                <h4>Total</h4>
                <h6>{recipe.preparationTime + recipe.cookingTime} min</h6>
              </div>
            </div>
          </div>

          <div className="recipe-instructions">
            <div class="ingredients">
              <h3>Ingredients</h3>
              {recipe.ingredients.map((item) => (
                <div>{item}</div>
              ))}
            </div>
            <div class="steps">
              <h3>Preparations</h3>
              {recipe.steps.map((item) => (
                <p>{item}</p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
