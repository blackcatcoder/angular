import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-home-section11',
  templateUrl: './home-section11.component.html',
  styleUrls: ['./home-section11.component.css']
})
export class HomeSection11Component implements OnInit {

  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit() {
  }

  onLoadServers(id: number){
    // complex calculation
    this.router.navigate(['/servers', id, 'edit'], {queryParams: {allowEdit: 1}, fragment: 'loading'});
  }

  onLogin(){
    this.authService.login();
  }

  onLogout(){
    this.authService.logout();
  }

}
