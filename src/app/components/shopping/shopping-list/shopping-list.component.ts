import {Component} from '@angular/core';
import {ShoppingListEditComponent} from "./shopping-list-edit/shopping-list-edit.component";
import {Ingredients} from "../../../shared/ingerdients-model";

@Component({
  selector: 'app-shopping-list',
  standalone: true,
  imports: [
    ShoppingListEditComponent
  ],
  templateUrl: './shopping-list.component.html',
  styleUrl: './shopping-list.component.css'
})
export class ShoppingListComponent {

  ingredients: Ingredients[] = [
    new Ingredients('mango', 100),
    new Ingredients('apple', 30),
    new Ingredients('pizzas', 50),
  ]


}
