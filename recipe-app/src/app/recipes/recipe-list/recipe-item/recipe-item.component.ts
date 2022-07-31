import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Recipe } from '../../recipe.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {

  @Input()recipe!: Recipe;
 // @Output() recipeSelected = new EventEmitter<void>();

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  //onSelected(){
    //this.recipeSelected.emit();

    // render recipe detail
   // this.router.navigate(['/recipes', this.recipe.id]);

  //}

}
