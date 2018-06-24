import {
  Component,
  OnInit,
  Output,
  ViewChild,
  ElementRef,
  EventEmitter
} from "@angular/core";
import { Ingredient } from "../../shared/ingredient.model";

@Component({
  selector: "app-shopping-edit",
  templateUrl: "./shopping-edit.component.html",
  styleUrls: ["./shopping-edit.component.css"]
})
export class ShoppingEditComponent implements OnInit {
  @Output() ingredientAdded = new EventEmitter<Ingredient>();
  @ViewChild("nameInput") nameRef: ElementRef;
  @ViewChild("amountInput") amountRef: ElementRef;
  constructor() {}

  ngOnInit() {}

  onAddItem() {
    const ingredient: Ingredient = new Ingredient(
      this.nameRef.nativeElement.value,
      this.amountRef.nativeElement.value
    );
    this.ingredientAdded.emit(ingredient);
  }
}
