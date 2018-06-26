import { NgModule } from "@angular/core";

import { HomeComponent } from "./home/home.component";
import { HeaderComponent } from "./header/header.component";
import { SharedModules } from "../shared/shared.modules";
import { AppRoutingModule } from "../app-routing.module";
import { ShoppingListService } from "../shopping-list/shopping-list.service";
import { RecipeService } from "../recipes/recipe.service";
import { DataStorageService } from "../shared/data-storage.service";
import { AuthService } from "../auth/auth.service";

@NgModule({
  declarations: [HeaderComponent, HomeComponent],
  imports: [SharedModules, AppRoutingModule],
  exports: [AppRoutingModule, HeaderComponent],
  providers: [
    ShoppingListService,
    RecipeService,
    DataStorageService,
    AuthService
  ]
})
export class CoreModule {}
