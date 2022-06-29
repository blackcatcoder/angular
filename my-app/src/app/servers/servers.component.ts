import { Component, OnInit } from '@angular/core';

@Component({
  //selector: '[app-servers]',
  //selector: '.app-servers',
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  allowNewServer = false;
  serverCreated = false;
  serverName="default serverName";
  serverName2="default serverName2"
  serverName3 = "default serverName3";
  servers = ["server 1", "server 2"];

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 10000);
   }

  ngOnInit(): void {
  }

  onUpdateServerName(event: Event){
    console.log(event);
    this.serverName = (<HTMLInputElement>event.target).value;
  }

  onCreateServer(){
    this.serverCreated = !this.serverCreated;
    this.servers.push(this.serverName3);
  }

}
