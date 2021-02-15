import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { WeatherComponent } from './components/index';

import { WeatherService, ConstantsService } from './services/index';


@NgModule({
  declarations: [AppComponent, WeatherComponent],
  imports: [CommonModule, BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [WeatherService, ConstantsService],
  bootstrap: [AppComponent],
})
export class AppModule {}
