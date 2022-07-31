import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Data, Params, Router } from '@angular/router';
import { ServersSection11Service } from 'src/app/services/servers-section11.service';


@Component({
  selector: 'app-server-section11',
  templateUrl: './server-section11.component.html',
  styleUrls: ['./server-section11.component.css']
})
export class ServerSection11Component implements OnInit {

  server: { id: number, name: string, status: string };

  constructor(private serversService: ServersSection11Service, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {

    // option 1: pass and create data with route
    // support pass object over route
    this.route.data.subscribe(
      (data: Data) => {
        this.server = data['server'];
      }
    );

    // option 2: pass and create data with angular
    // error here

    // the first time
    //  const id = +this.route.snapshot.params['id']; // + here is convert string to number
    //  this.server = this.serversService.getServer(id) as { id: number, name: string, status: string };

    // any time in the future start at second time
    //  this.route.params.subscribe(
    //   (params: Params) => {
    //     this.server = this.serversService.getServer(+params['id']) as { id: number, name: string, status: string };
    //   }
    //  );
  }

  onEdit(){
    console.log('on edit called');
    //this.router.navigate(['/servers', this.server.id, 'edit']);
    this.router.navigate(['edit'], {relativeTo: this.route, queryParamsHandling: 'preserve'}); // queryParamsHandling: 'preserve' -> it help keep query param ?allowEdit=1 still on url of the next route
                                                                                               // in case you have new query param you should add: queryParamsHandling: 'merge'
  }

}
