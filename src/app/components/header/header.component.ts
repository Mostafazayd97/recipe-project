import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  openSideMenu = true;






  clickSideMenu(){
   return  this.openSideMenu = !this.openSideMenu;
  }
}
