import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../services/Recipe.service';
import { Recipe } from './recipe.model';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {

 // recipe!: Recipe;

  constructor(private recipeSerive: RecipeService) { }

  ngOnInit(): void {
    // this.recipeSerive.recipeSelected.subscribe((recipe: Recipe) => {
    //   this.recipe = recipe;
    // });
  }

  //onRecipeSelected(recipe: Recipe){
  //  this.recipe = recipe
  //}

}
