import {Recipe} from './recipe.model';
import {EventEmitter} from '@angular/core';

export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe('guacamole',
      'very delicious thingy',
      'https://www.simplyrecipes.com/wp-content/uploads/2018/07/Guacamole-LEAD-1.jpg'),
    new Recipe('blinciki',
      'yammy',
      'https://www.inspiredtaste.net/wp-content/uploads/2016/07/Pancake-Recipe-1-1200.jpg')
  ];
  getRecepies() {
    return this.recipes.slice();
  }
}
