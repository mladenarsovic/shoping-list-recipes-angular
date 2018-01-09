import { EventEmitter, Injectable } from '@angular/core';

import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'A Test Recipe', 
      'This is simply a test', 
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBlIAeL3h0ZXldD7Zqsu5qVv5aPsaVjY5Hd4cPUcaF3h5ZvA4A6Q',
      [
        new Ingredient('Meat', 1),
        new Ingredient('Franchfrise', 20)
      ]),
    new Recipe(
      'Another Test Recipe', 
      'This is simply a test', 
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDHU2QPOG0bbAjVj_zE-B8GtCDnv--88hY8clFZDyeiGpqrpRG',
      [
        new Ingredient('Buns', 2),
        new Ingredient('Meat', 1),

      ])
  ];

  constructor(private slService: ShoppingListService) {}

  getRecipes() {
    return this.recipes.slice();
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }
}