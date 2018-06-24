import { Component, OnInit, Output, EventEmitter } from "@angular/core";

import { Recipe } from "../recipe.model";
@Component({
  selector: "app-recipe-list",
  templateUrl: "./recipe-list.component.html",
  styleUrls: ["./recipe-list.component.css"]
})
export class RecipeListComponent implements OnInit {
  @Output() recipeSelected = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
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

  constructor() {}

  ngOnInit() {}

  onRecipeSelected(recipe: Recipe) {
    this.recipeSelected.emit(recipe);
  }
}
