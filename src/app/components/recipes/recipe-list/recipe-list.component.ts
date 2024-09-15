import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {RecipeItemComponent} from "./recipe-item/recipe-item.component";
import {RecipeModel} from "../recipe-model";
import {RecipeService} from "../../../services/recipe.service";

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
  recipes!: RecipeModel[]

  constructor(private recipeService: RecipeService) {
   this.recipes = recipeService.getRecipes()
  }

  onSelectedRecipe(recipe: RecipeModel) {
    this.recipeService.selectedRecipe.emit(recipe)
  }

}
