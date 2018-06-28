import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { StoreModule } from "@ngrx/store";

import { SharedModules } from "../shared/shared.modules";
import { RecipesComponent } from "./recipes.component";
import { RecipeStartComponent } from "./recipe-start/recipe-start.component";
import { RecipeListComponent } from "./recipe-list/recipe-list.component";
import { RecipeEditComponent } from "./recipe-edit/recipe-edit.component";
import { RecipeDetailComponent } from "./recipe-detail/recipe-detail.component";
import { RecipeItemComponent } from "./recipe-list/recipe-item/recipe-item.component";
import { RecipesRoutingModule } from "./recipes-routing.module";
import { recipeReducers } from "./store/recipe.reducers";

@NgModule({
  declarations: [
    RecipesComponent,
    RecipeStartComponent,
    RecipeListComponent,
    RecipeEditComponent,
    RecipeDetailComponent,
    RecipeItemComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RecipesRoutingModule,
    SharedModules,
    StoreModule.forFeature("recipes", recipeReducers) //Tells to add this reducer and state to global app state once it is added to app (lazy loading)
  ]
})
export class RecipesModule {}
