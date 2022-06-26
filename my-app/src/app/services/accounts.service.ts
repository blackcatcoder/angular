import { EventEmitter, Injectable } from '@angular/core';
import { LoggingService } from './logging.service';

@Injectable({
  providedIn: 'root'
})
export class AccountsService {

  accounts = [
    {
      name: "name active",
      status: "active"
    },
    {
      name: "name inactive",
      status: "inactive"
    },
    {
      name: "name unknow",
      status: "unknow"
    }
  ];

  statusUpdated = new EventEmitter<string>();

  constructor(private loggingService: LoggingService){}

  addAccount(name: string, status: string){
    this.accounts.push({name: name, status: status});
    this.loggingService.logStatusChange(status);
  }

  updateStatus(id: number, status: string){
    this.accounts[id].status = status;
  }

  getAccounts(){
    return this.accounts;
  }

}
