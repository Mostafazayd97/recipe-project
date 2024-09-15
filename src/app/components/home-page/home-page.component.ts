import { Component } from '@angular/core';
import {RecipeListComponent} from "../recipes/recipe-list/recipe-list.component";
import {RecipeDetailsComponent} from "../recipes/recipe-details/recipe-details.component";
import {ShoppingListComponent} from "../shopping/shopping-list/shopping-list.component";
import {HeaderComponent} from "../header/header.component";
import {NgIf} from "@angular/common";
import {RecipeModel} from "../recipes/recipe-model";

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [
    RecipeListComponent,
    RecipeDetailsComponent,
    ShoppingListComponent,
    HeaderComponent,
    NgIf
  ],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {

  featureLoaded:string = 'recipes'

  selectFeature(feature:string){
    this.featureLoaded = feature
  }


}
