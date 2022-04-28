import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WeatherPageComponent } from './weather-page/weather-page.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';

const routes: Routes = [
  {path: '', redirectTo: '/weather', pathMatch: 'full'},
  {path: 'weather', component: WeatherPageComponent},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    HttpClientModule,
    BrowserModule
    ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

