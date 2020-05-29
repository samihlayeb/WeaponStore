import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common';
import { RouterModule } from '@angular/router';
import {ShopComponent} from './shop.component';
import {ShopRoutes} from './shop.routes';


@NgModule({
  declarations: [ShopComponent],
  imports: [CommonModule, RouterModule.forChild(ShopRoutes)],
  providers: []
})
export class ShopModule {}
