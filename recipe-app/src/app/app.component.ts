import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'recipe-app';

  isRecipe: boolean = true;

  // routerHandler(feature: {feature: string}){
  //   if(feature.feature === 'recipe'){
  //     this.isRecipe = true;
  //   }else{
  //     this.isRecipe = false;
  //   }
  // }

}
