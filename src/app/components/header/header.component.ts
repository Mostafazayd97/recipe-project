import {Component, EventEmitter, Output} from '@angular/core';
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  @Output() selectedFeature = new EventEmitter();

  openSideMenu = true;




  onSelectedFeatures(feature:string){
    this.selectedFeature.emit(feature)
  }

  clickSideMenu(){
   return  this.openSideMenu = !this.openSideMenu;
  }
}
