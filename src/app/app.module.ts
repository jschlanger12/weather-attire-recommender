import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WeatherPageComponent } from './weather-page/weather-page.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { WeatherAttireServiceService } from './weather-attire-service/weather-attire-service.service'

@NgModule({
  declarations: [
    AppComponent,
    WeatherPageComponent,
    PageNotFoundComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [WeatherAttireServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
