import { EventEmitter, Injectable } from '@angular/core';
import { Recipe } from '../recipes/recipe.model';
import { Ingredient } from '../shared/Ingredient.model';
import { ShoppingListService } from './shoppingList.service';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

    constructor(private shoppingListService: ShoppingListService){}

    //private recipeSelected!: Recipe;
    recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe(
            'name 1', 
            'description 1', 
            'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F44%2F2020%2F03%2F03%2F7782449.jpg',
            [
                new Ingredient("Apple", 5),
                new Ingredient("Orange", 10)
            ]
            ),
        new Recipe(
            'name 2', 
            'description 2', 
            'https://assets.bonappetit.com/photos/62bf35ae872a6cfbb260f286/2:3/w_1600,h_2400,c_limit/0701-tj-recipe-potato-v2.jpg',
            [
                new Ingredient("Orange", 10),
                new Ingredient("Orange", 20)
            ]
            )
    ];
      
    getRecipes(){
        //return this.recipes;
        return this.recipes.slice(); // copy list array instead of original list array
    }

    addIngredientToShoppingList(ingredients: Ingredient[]){
        this.shoppingListService.addIngredients(ingredients);
    }

}