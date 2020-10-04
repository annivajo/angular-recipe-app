import {Component, OnInit, EventEmitter, Output} from '@angular/core';
import {Recipe} from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
 @Output() recipeWasSelected = new EventEmitter<Recipe>();

 recipes: Recipe[] = [
   new Recipe('guacamole',
     'very delicious thingy',
     'https://www.simplyrecipes.com/wp-content/uploads/2018/07/Guacamole-LEAD-1.jpg'),
   new Recipe('blinciki',
     'yammy',
     'https://www.inspiredtaste.net/wp-content/uploads/2016/07/Pancake-Recipe-1-1200.jpg')
 ];

  constructor() { }

  ngOnInit(): void {
  }

  onRecipeSelected = (recipe: Recipe) => {
    this.recipeWasSelected.emit(recipe);
  }

}
