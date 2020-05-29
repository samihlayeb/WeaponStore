import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common';
import { RouterModule } from '@angular/router';
import {ShopComponent} from './shop.component';
import {ShopRoutes} from './shop.routes';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatSnackBarModule } from '@angular/material/snack-bar';


@NgModule({
  declarations: [ShopComponent],
  imports: [CommonModule, RouterModule.forChild(ShopRoutes),
    MatCardModule, MatButtonModule, MatIconModule, MatDividerModule, MatSnackBarModule ],
  providers: []
})
export class ShopModule {}
