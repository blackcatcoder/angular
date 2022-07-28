import { Component, OnInit } from '@angular/core';
import { AccountsService } from './services/accounts.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
 // providers: [AccountsService]
})
export class AppComponent implements OnInit{

  title = 'my-app';
  name='anhvi';
  serverElements: any[] = [{type: 'server', name: 'server', content: 'content1'}];
  numbers = [1, 2, 3, 4, 5];
  onlyOdd = false;
  oddNumbers = [1, 3, 5];
  evenNumbers = [2, 4];
  value: number = 10;
  accounts: {name: string, status: string}[] = [];

  constructor(private accountsService: AccountsService) { }

  ngOnInit(): void {
      this.accounts = this.accountsService.getAccounts();
  }

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

  onAccountAdded(newAccount: {name: string, status: string}){
    //this.accounts.push(newAccount);
    this.accountsService.addAccount(newAccount.name, newAccount.status);
  }

  onStatusChanged(updateInfo: {id: number, newStatus: string}){
    //this.accounts[updateInfo.id].status = updateInfo.newStatus;
    this.accountsService.updateStatus(updateInfo.id, updateInfo.newStatus);
  }
  
}
