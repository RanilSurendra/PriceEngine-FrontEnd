import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { PriceCalculatorComponent } from './price-calculator/price-calculator.component';

const routes: Routes = [
  { path: 'product-list', component: ProductListComponent },
  { path: 'price-calculator', component: PriceCalculatorComponent}
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
    CommonModule
  ]
})
export class AppRoutingModule { }
