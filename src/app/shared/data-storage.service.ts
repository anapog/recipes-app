import { Injectable } from "@angular/core";
import {
  HttpClient,
  HttpHeaders,
  HttpParams,
  HttpRequest
} from "@angular/common/http";
import { map } from "rxjs/operators";

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

    // return this.httpClient.put(
    //   "https://ng-recipe-book-71c03.firebaseio.com/recipes.json",
    //   this.recipeService.getRecipes(),
    //   // { observe: "events" }
    //   { observe: "body", params: new HttpParams().set("auth", token) }
    // );

    // Request with progress reports. Useful for file download/upload for example
    const req = new HttpRequest(
      "PUT",
      "https://ng-recipe-book-71c03.firebaseio.com/recipes.json",
      this.recipeService.getRecipes(),
      // { reportProgress: true, params: new HttpParams().set("auth", token) }
      { reportProgress: true }
    );
    return this.httpClient.request(req);
  }

  getRecipes() {
    const token = this.authService.getToken();

    return this.httpClient
      .get<Recipe[]>(
        // "https://ng-recipe-book-71c03.firebaseio.com/recipes.json?auth=" +
        //   token,
        "https://ng-recipe-book-71c03.firebaseio.com/recipes.json",
        { observe: "body", responseType: "json", headers: new HttpHeaders() }
      )
      .pipe(
        map(recipes => {
          for (let recipe of recipes) {
            if (!recipe["ingredients"]) {
              recipe["ingredients"] = [];
            }
          }

          return recipes;
        })
      )
      .subscribe((recipes: Recipe[]) => {
        this.recipeService.setRecipes(recipes);
      });
  }
}
