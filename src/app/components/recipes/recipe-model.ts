import {Ingredients} from "../../shared/ingerdients-model";

export  class RecipeModel {
  public recipeId: string;
  public recipeName: string;
  public recipeType: string;
  public recipeDescription: string;
  imagePath: string;


  constructor(recipeId: string, recipeName: string, recipeType: string, recipeDescription: string,imagePath: string,public ingredients:Ingredients[]) {
    this.recipeId = recipeId;
    this.recipeName = recipeName;
    this.recipeType = recipeType;
    this.recipeDescription = recipeDescription;
    this.imagePath = imagePath;
  }
}
