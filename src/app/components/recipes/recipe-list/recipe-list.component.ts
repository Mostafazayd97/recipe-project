import {Component, EventEmitter, Output} from '@angular/core';
import {RecipeItemComponent} from "./recipe-item/recipe-item.component";
import {RecipeModel} from "../recipe-model";

@Component({
  selector: 'app-recipe-list',
  standalone: true,
  imports: [
    RecipeItemComponent
  ],
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.css'
})
export class RecipeListComponent {

  @Output() selectedRecipe = new EventEmitter();

  recipes: RecipeModel[] = [new RecipeModel('1', 'test 1', 'dessert', 'test 1 description', '/assets/images/recipe 1.jpg'),
    new RecipeModel('2', 'test 2', 'dessert', 'test 2 description', '/assets/images/recipe 1.jpg'),
    new RecipeModel('3', 'test 3', 'pizzas', 'test 3 description', '/assets/images/recipe 1.jpg'),
    new RecipeModel('4', 'test 4', 'burgers', 'test 4 description', '/assets/images/recipe 1.jpg')
  ]

  onSelectedRecipe(recipe: RecipeModel) {
    this.selectedRecipe.emit(recipe);
  }


}
