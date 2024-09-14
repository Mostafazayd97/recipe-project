import { Component } from '@angular/core';

import {DUMMY_USERS} from "./dummy-users";
import {HeaderComponent} from "./components/header/header.component";

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [
    HeaderComponent
  ],
})
export class AppComponent {
  users = DUMMY_USERS;
  setName!:string



  get selectedUser (){
    return this.users.find(user => user.name === this.setName)
   }


  onSelectUser(name:string){
    this.setName = name
  }
}
