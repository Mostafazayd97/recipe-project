import {Routes} from "@angular/router";
import {HomePageComponent} from "./home-page.component";

export default [
  {

    path: '',
    loadComponent: () => HomePageComponent,
    resolve: {},
  },
] as Routes
