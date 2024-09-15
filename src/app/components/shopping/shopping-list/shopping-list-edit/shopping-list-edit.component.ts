import {Component, ElementRef, EventEmitter, Output} from '@angular/core';
import {Ingredients} from "../../../../shared/ingerdients-model";

@Component({
  selector: 'app-shopping-list-edit',
  standalone: true,
  imports: [],
  templateUrl: './shopping-list-edit.component.html',
  styleUrl: './shopping-list-edit.component.css'
})
export class ShoppingListEditComponent {
@Output() save = new EventEmitter();

  toAddShoppinglist(name: HTMLInputElement, amount: HTMLInputElement) {
    const ingredient = new Ingredients(name.value, +amount.value);

    this.save.emit(ingredient)


  }
}
