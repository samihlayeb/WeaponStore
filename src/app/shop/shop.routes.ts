import { Routes } from '@angular/router';
import {ShopComponent} from './shop.component';

export const ShopRoutes: Routes = [
  {
    path: 'shop-component',
    component: ShopComponent
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'shop-component'
  }
];
