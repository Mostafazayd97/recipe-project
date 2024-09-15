import {Component, Input} from '@angular/core';
import {RecipeModel} from "../recipe-model";
import {RecipeService} from "../../../services/recipe.service";

@Component({
  selector: 'app-recipe-details',
  standalone: true,
  imports: [],
  templateUrl: './recipe-details.component.html',
  styleUrl: './recipe-details.component.css'
})
export class RecipeDetailsComponent {
  recipe!: RecipeModel;
  constructor(private recipeService: RecipeService) {

  }

  ngOnInit(): void {
    this.recipeService.selectedRecipe.subscribe(recipe => {
      this.recipe = recipe
    })
  }



}
