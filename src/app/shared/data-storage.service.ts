import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { RecipeService } from "../recipes/recipe.service";
import { Recipe } from "../recipes/recipe.model";

@Injectable()
export class DataStorageService {
  constructor(
    private httpClient: HttpClient,
    private recipeService: RecipeService
  ) {}

  storeRecipes() {
    return this.httpClient.put(
      "https://ng-recipe-book-71c03.firebaseio.com/recipes.json",
      this.recipeService.getRecipes()
    );
  }

  getRecipes() {
    return this.httpClient
      .get<Recipe[]>("https://ng-recipe-book-71c03.firebaseio.com/recipes.json")
      .subscribe(recipes => {
        for (let recipe of recipes) {
          if (!recipe["ingredients"]) {
            recipe["ingredients"] = [];
          }
        }

        this.recipeService.setRecipes(recipes);
      });
  }
}
