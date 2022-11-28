import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ListComponent } from './components/list/list.component';
import { FormsModule } from '@angular/forms';

//Angular Material
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { MatDividerModule } from "@angular/material/divider";
import { MainNavComponent } from './main-nav/main-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatListModule } from '@angular/material/list';
import { ShoppingCartComponent } from './pages/shopping-cart/shopping-cart.component';
import { InputNumberComponent } from './components/input-number/input-number.component';
import { HttpClientModule } from '@angular/common/http';
import { MotosComponent } from './pages/motos/motos.component';
import { CardComponent } from './components/card/card.component';
import { CarrouselComponent } from './components/carrousel/carrousel.component';
import { ControlComponent } from './components/carrousel/control/control.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ShoppingCartComponent,
    ListComponent,
    MainNavComponent,
    InputNumberComponent,
    MotosComponent,
    CardComponent,
    CarrouselComponent,
    ControlComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
    FormsModule,
    LayoutModule,
    MatListModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
