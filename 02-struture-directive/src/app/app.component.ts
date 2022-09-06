import { Component } from '@angular/core';

interface User {
  id:number
  name: string
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  users:Array<User>
  constructor () {
    this.users = [
      {id: 1, name: 'a'},
      {id: 2, name: 'b'},
      {id: 3, name: 'c'},
    ]
  }

  refresh() {
    this.users = [
      {id: 1, name: 'a'},
      {id: 2, name: 'b'},
      {id: 3, name: 'c'},
      {id: 4, name: 'd'},
    ]
  }

  track(index:number, user:User) {
    return user.id
  }
  
}
