import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'my-app';
  name='anhvi';
  serverElements: any[] = [{type: 'server', name: 'server', content: 'content1'}];
  numbers = [1, 2, 3, 4, 5];
  onlyOdd = false;
  oddNumbers = [1, 3, 5];
  evenNumbers = [2, 4];
  value: number = 10;

  onServerAdded(serverData: {serverName: string, serverContent: string}){
    this.serverElements.push({
      type: 'server',
      name: serverData.serverName,
      content: serverData.serverContent
    })
  }

  onBlueprintAdded(serverData: {serverName: string, serverContent: string}){
    this.serverElements.push({
      type: 'blueprint',
      name: serverData.serverName,
      content: serverData.serverContent
    })
  }

  onChangeFirst(){
    this.serverElements[0].name = 'changed'+Math.random();
  }

  onDestroyFirst(){
    this.serverElements.splice(0, 1);
  }

  
  
}
