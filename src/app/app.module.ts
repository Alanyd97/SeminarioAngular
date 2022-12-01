import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
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
import { HttpClientModule } from '@angular/common/http';
import { MotosComponent } from './components/motos/motos.component';
import { CardComponent } from './components/card/card.component';
import { CarrouselComponent } from './components/carrousel/carrousel.component';
import { ControlComponent } from './components/carrousel/control/control.component';
import { DetalleComponent } from './pages/detalle/detalle.component';
import { BetsComponent } from './pages/bets/bets.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MainNavComponent,
    MotosComponent,
    CardComponent,
    CarrouselComponent,
    ControlComponent,
    DetalleComponent,
    BetsComponent,
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
