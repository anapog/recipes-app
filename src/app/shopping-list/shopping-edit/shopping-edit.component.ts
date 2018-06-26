import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";

import { Ingredient } from "../../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list.service";

@Component({
  selector: "app-shopping-edit",
  templateUrl: "./shopping-edit.component.html",
  styleUrls: ["./shopping-edit.component.css"]
})
export class ShoppingEditComponent implements OnInit {
  constructor(private shoppingListService: ShoppingListService) {}

  ngOnInit() {}

  onAddItem(form: NgForm) {
    const ingredient: Ingredient = new Ingredient(
      form.value.name,
      form.value.amount
    );
    this.shoppingListService.addIngredient(ingredient);
  }
}
