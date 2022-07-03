import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { UserService } from './user/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy{

  title = 'observable-demo';
  userActivated = false;
  private activateSub: Subscription = new Subscription;

  constructor(private userService: UserService ){
  }

  ngOnInit(): void {
      this.activateSub = this.userService.activatedEmitter.subscribe(
        (didActivate) => {
          this.userActivated = didActivate;
        }
      );
  }

  ngOnDestroy(): void {
      this.activateSub.unsubscribe();
  }

}
