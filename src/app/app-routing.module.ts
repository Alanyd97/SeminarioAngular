import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ShoppingCartComponent } from './pages/shopping-cart/shopping-cart.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'shopping-cart', component: ShoppingCartComponent },
  { path: '**', component:  HomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
