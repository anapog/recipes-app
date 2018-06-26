import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { AuthService } from "../auth/auth.service";
import { RecipeService } from "../recipes/recipe.service";
import { Recipe } from "../recipes/recipe.model";

@Injectable()
export class DataStorageService {
  constructor(
    private httpClient: HttpClient,
    private recipeService: RecipeService,
    private authService: AuthService
  ) {}

  storeRecipes() {
    const token = this.authService.getToken();

    return this.httpClient.put(
      "https://ng-recipe-book-71c03.firebaseio.com/recipes.json?auth=" + token,
      this.recipeService.getRecipes()
    );
  }

  getRecipes() {
    const token = this.authService.getToken();

    return this.httpClient
      .get<Recipe[]>(
        "https://ng-recipe-book-71c03.firebaseio.com/recipes.json?auth=" + token
      )
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
