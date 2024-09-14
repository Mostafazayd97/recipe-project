import {Route} from "@angular/router";
import {LayoutComponent} from "./components/layout/layout/layout.component";

export const routes: Route[] = [
  {
    path: '', pathMatch: 'full', redirectTo: 'home'
  },

  {
    path: '', component:LayoutComponent, children: [

      {path: 'home', loadChildren: () => import('./components/home-page/homepageRoutes')}

    ]
  }

]
