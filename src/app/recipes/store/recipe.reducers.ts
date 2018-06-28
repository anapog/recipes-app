import { Recipe } from "../recipe.model";
import { Ingredient } from "../../shared/ingredient.model";

import * as RecipeActions from "./recipe.actions";
import * as fromApp from "../../store/app.reducer";

export interface FeatureState extends fromApp.AppState {
  recipes: State;
}

export interface State {
  recipes: Recipe[];
}

const initialState: State = {
  recipes: [
    new Recipe(
      "Canelones",
      "Descripción de unos canelones.",
      "https://img.delicious.com.au/52hfFIjf/h506-w759-cfill/del/2017/05/one-pot-butter-chicken-with-dill-yoghurt-46876-2.jpg",
      [new Ingredient("Carne", 4), new Ingredient("Pasta", 2)]
    ),
    new Recipe(
      "Espaguetis",
      "Descripción de unos espaguetis.",
      "https://img.delicious.com.au/52hfFIjf/h506-w759-cfill/del/2017/05/one-pot-butter-chicken-with-dill-yoghurt-46876-2.jpg",
      [
        new Ingredient("Espaguetis", 10),
        new Ingredient("Tomate", 2),
        new Ingredient("Champiñones", 1)
      ]
    )
  ]
};

export function recipeReducers(
  state = initialState,
  action: RecipeActions.RecipeActions
) {
  switch (action.type) {
    case RecipeActions.SET_RECIPES:
      return {
        ...state,
        recipes: [...action.payload]
      };

    case RecipeActions.ADD_RECIPE:
      return {
        ...state,
        recipes: [...state.recipes, action.payload]
      };

    case RecipeActions.UPDATE_RECIPE:
      const recipe = state.recipes[action.payload.index];
      const updatedRecipe = {
        ...recipe,
        ...action.payload.updatedRecipe
      };
      const recipes = [...state.recipes];
      recipes[action.payload.index] = updatedRecipe;
      return {
        ...state,
        recipes: recipes
      };

    case RecipeActions.DELETE_RECIPE:
      const oldRecipes = [...state.recipes];
      oldRecipes.splice(action.payload, 1);
      return {
        ...state,
        recipes: oldRecipes
      };

    default:
      return state;
  }
}
