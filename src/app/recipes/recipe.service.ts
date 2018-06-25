import { Recipe } from "./recipe.model";

export class RecipeService {
  private recipes: Recipe[] = [
    new Recipe(
      "This test recipe",
      "This is a simple description",
      "https://img.delicious.com.au/52hfFIjf/h506-w759-cfill/del/2017/05/one-pot-butter-chicken-with-dill-yoghurt-46876-2.jpg"
    ),
    new Recipe(
      "This test2 recipe",
      "This is a simple description2",
      "https://img.delicious.com.au/52hfFIjf/h506-w759-cfill/del/2017/05/one-pot-butter-chicken-with-dill-yoghurt-46876-2.jpg"
    )
  ];

  getRecipes() {
    return this.recipes.slice(); //Returns a copy of the array stored in services, not the reference
  }
}
