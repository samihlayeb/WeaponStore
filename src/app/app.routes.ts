import { Routes } from '@angular/router';

export const AppRoutes: Routes = [
  {
    path: 'shop',
    loadChildren: './shop/shop.module#ShopModule'
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'shop'
  },
  {
    path: '**',
    redirectTo: 'shop'
  }

];
