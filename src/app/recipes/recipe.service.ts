import {Recipe} from './recipe.model';
import {EventEmitter} from '@angular/core';
import {Ingredient} from '../shopping-list/ingredient.model';

export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe('guacamole',
      'very delicious thingy',
      'https://www.simplyrecipes.com/wp-content/uploads/2018/07/Guacamole-LEAD-1.jpg',
      [
        new Ingredient('Avokado', 3),
        new Ingredient('Lime', 1),
        new Ingredient('Tomatoes', 2)
      ]),
    new Recipe('blinciki',
      'yammy',
      'https://www.inspiredtaste.net/wp-content/uploads/2016/07/Pancake-Recipe-1-1200.jpg',
      [
        new Ingredient('Flower', 1),
        new Ingredient('Egg', 3),
        new Ingredient('Vanilla', 2)
      ])
  ];
  getRecepies() {
    return this.recipes.slice();
  }
}
