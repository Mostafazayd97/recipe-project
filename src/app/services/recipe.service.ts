import {EventEmitter, Injectable} from '@angular/core';
import {RecipeModel} from "../components/recipes/recipe-model";
import {Ingredients} from "../shared/ingerdients-model";

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  selectedRecipe = new EventEmitter();
  constructor() { }

  recipes: RecipeModel[] = [new RecipeModel('1', 'test 1', 'dessert', 'test 1 description', '/assets/images/recipe 1.jpg',[
    new Ingredients('ng1',100),new Ingredients('ng2',100)
  ]),
    new RecipeModel('2', 'test 2', 'dessert', 'test 2 description', '/assets/images/recipe 1.jpg',
      [
        new Ingredients('ng3',100),new Ingredients('ng4',100)
      ]),
    new RecipeModel('3', 'test 3', 'pizzas', 'test 3 description', '/assets/images/recipe 1.jpg',
      [
        new Ingredients('ng5',100),new Ingredients('ng6',100)
      ]),
    new RecipeModel('4', 'test 4', 'burgers', 'test 4 description', '/assets/images/recipe 1.jpg',
      [
        new Ingredients('ng8',100),new Ingredients('ng7',100)
      ])
  ]

  getRecipes (){
    return this.recipes;
  }

  selectRecipe(recipeId: string){
    const recipe = this.recipes.find(recipe=> recipe.recipeId === recipeId);
    this.selectedRecipe.emit(recipe);
  }
}
