import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AccountsService } from '../services/accounts.service';
import { LoggingService } from '../services/logging.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
  //providers: [AccountsService]
})
export class NewAccountComponent implements OnInit {

  @Output() accountAdded = new EventEmitter<{name: string, status: string}>();

  constructor(private loggingService: LoggingService, private accountsService: AccountsService) {
    this.accountsService.statusUpdated.subscribe(
      (status: string) => alert('new account added successfully')
    );
   }

  ngOnInit(): void {
  }

  onCreatAccount(accountName: string, accountStatus: string){

    // using service instead of emit
    // this.accountAdded.emit({
    //   name: accountName,
    //   status: accountStatus
    // });
    this.accountsService.addAccount(accountName, accountStatus);

    console.log('From Normal Logging: a server status changed, new status: '+accountStatus);
    //const service = new LogginService();
    //this.loggingService.logStatusChange(accountStatus);
    this.accountsService.statusUpdated.emit(accountStatus);
  }


}

