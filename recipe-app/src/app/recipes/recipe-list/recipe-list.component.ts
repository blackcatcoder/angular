import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RecipeService } from 'src/app/services/Recipe.service';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

 // @Output() recipeSelected = new EventEmitter<Recipe>();

  recipes: Recipe[] = [];

  constructor(private recipeService: RecipeService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.recipes = this.recipeService.getRecipes();
  }

  //onRecipeSelected(recipe: Recipe){
  //  this.recipeService.recipeSelected.emit(recipe);
  //this.recipeSelected.emit(recipe)
  //}

  // in case you use programmatic way
  // onNewRecipe(){
  //   this.router.navigate(['new'], {relativeTo: this.route})
  // }

}
