import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServersSection11Service } from '../services/servers-section11.service';

@Component({
  selector: 'app-servers-section11',
  templateUrl: './servers-section11.component.html',
  styleUrls: ['./servers-section11.component.css']
})
export class ServersSection11Component implements OnInit {
  public servers: {id: number, name: string, status: string}[] = [];

  constructor(private serversService: ServersSection11Service, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.servers = this.serversService.getServers();
  }

  onLoadServers(){
    //absolute
    //this.router.navigate(['/servers']);
    this.router.navigate(['servers']);

    // relative
   // this.router.navigate(['servers'], {relativeTo: this.route});
  }
}