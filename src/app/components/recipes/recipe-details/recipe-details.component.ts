import {Component, Input} from '@angular/core';
import {RecipeModel} from "../recipe-model";

@Component({
  selector: 'app-recipe-details',
  standalone: true,
  imports: [],
  templateUrl: './recipe-details.component.html',
  styleUrl: './recipe-details.component.css'
})
export class RecipeDetailsComponent {
  @Input() recipe!: RecipeModel;

}
