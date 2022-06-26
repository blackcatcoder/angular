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
