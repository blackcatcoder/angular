import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { RecipeService } from 'src/app/services/Recipe.service';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {

  //@Input() recipe!: Recipe
  recipe!: Recipe;
  //paramsSubscription: Subscription;

  constructor(private route: ActivatedRoute, private router: Router, private recipeService: RecipeService) { }

  ngOnInit(): void {
    //const id = +this.route.snapshot.params['id'];
    //this.recipe = this.recipeService.getRecipeById(id) as Recipe;

    this.route.params.subscribe(
      (params: Params) => {
        const id = +params['id'];
        this.recipe = this.recipeService.getRecipeById(id) as Recipe;
      }
    );
  }

  onAddToShoppingList(){
    this.recipeService.addIngredientToShoppingList(this.recipe.ingredients);

    // redirect to shopping list
    this.router.navigate(['/shopping-list']);
  }

  // in case you use programmatic way
  // onEditRecipe(){
  //   this.router.navigate(['edit'], {relativeTo: this.route})
  // }

}
