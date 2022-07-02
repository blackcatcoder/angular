import { Component } from '@angular/core';

@Component({
  selector: 'app-users-section11',
  templateUrl: './users-section11.component.html',
  styleUrls: ['./users-section11.component.css']
})
export class UsersSection11Component {
  users = [
    {
      id: 1,
      name: 'Max'
    },
    {
      id: 2,
      name: 'Anna'
    },
    {
      id: 3,
      name: 'Chris'
    }
  ];
}
