import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ServersSection11Service } from 'src/app/services/servers-section11.service';
import { CanComponentDeactivate } from './can-deactivate-guard.service';


@Component({
  selector: 'app-edit-server-section11',
  templateUrl: './edit-server-section11.component.html',
  styleUrls: ['./edit-server-section11.component.css']
})
export class EditServerSection11Component implements OnInit, CanComponentDeactivate {

  server: {id: number, name: string, status: string};
  serverName = '';
  serverStatus = '';
  allowEdit = false;
  changesSaved: boolean = false;
  

  constructor(
      private serversService: ServersSection11Service, 
      private route: ActivatedRoute, 
      private router: Router) {
    this.server = {id: 10, name: 'name', status: 'status'};
   }

  ngOnInit() {
    console.log(this.route.snapshot.queryParams);
    console.log(this.route.snapshot.fragment);
    this.route.queryParams.subscribe((queryParams: Params) => {
      this.allowEdit = queryParams['allowEdit'] === '1' ? true : false
    });
    this.route.fragment.subscribe();
    // error here
    const id = +this.route.snapshot.params['id'];
    this.server = this.serversService.getServer(id) as { id: number, name: string, status: string };
    // subscribe route params to update the id if params changes
    this.serverName = this.server.name;
    this.serverStatus = this.server.status;
  }

  onUpdateServer() {
    this.serversService.updateServer(this.server.id, {name: this.serverName, status: this.serverStatus});
    this.changesSaved = true;
    this.router.navigate(['../'], {relativeTo: this.route});
  }

  canDeactivate(): Observable<boolean> | Promise<boolean> | boolean {
    if(!this.allowEdit){
      return true;
    }
    if((this.serverName !== this.server.name || this.serverStatus != this.server.status) && !this.changesSaved){
      return confirm("do you want to discard the changes?");
    }else{
      return true;
    }
  }
}
