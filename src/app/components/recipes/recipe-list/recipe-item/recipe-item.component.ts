import {Component, Input, OnInit} from '@angular/core';
import {RecipeModel} from "../../recipe-model";
import {RecipeService} from "../../../../services/recipe.service";

@Component({
  selector: 'app-recipe-item',
  standalone: true,
  imports: [],
  templateUrl: './recipe-item.component.html',
  styleUrl: './recipe-item.component.css'
})
export class RecipeItemComponent{
  @Input() recipe!: RecipeModel

  constructor(private recipeService: RecipeService) {

  }



}
