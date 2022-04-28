import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { WeatherData } from '../models/weather-data'
import { ClothingData } from '../models/clothing-data'
import { ItemData } from '../models/item-data';
@Injectable({
  providedIn: 'root'
})
export class WeatherAttireServiceService {
  ;
  clothingData = new ClothingData;
  weatherData = new WeatherData
  itemData = new ItemData

  constructor(private http: HttpClient) {}

  
  getWeather(city){
    const httpOptions = {
      headers: new HttpHeaders({
        'city': city,
        'Access-Control-Allow-Origin': '*'
      })
    }
    
    this.http.get<any>('http://localhost:8080/weather/getWeather',httpOptions).subscribe(data => {
      this.weatherData.description = data.description
      this.weatherData.temp = data.temp
      this.weatherData.wind = data.wind
    })
    return this.weatherData
  }

  getRecommendedAttire(temp, description){
    const httpOptions = {
      headers: new HttpHeaders({
        'Access-Control-Allow-Origin': '*',
        'description': description,
        'temp': String(temp)
      })
    }

    this.http.get<any>('http://localhost:8080/attire/getRecommendedAttire',httpOptions).subscribe(data => {
      let list = []
      for (let index = 0; index < data.length; index++) {
        const element = data[index];
        // let itemData = new ItemData
        // this.getLinkToRecommendedClothingType(element)
        list.push(element)
      }
    this.clothingData.clothing = list
     console.log(this.clothingData.clothing)
    })
  }

   async delay(ms: number) {
    return new Promise( resolve => setTimeout(resolve, ms) );
    }

  getLinkToRecommendedClothingType(item){
    const httpOptions = {
      headers: new HttpHeaders({
        'Access-Control-Allow-Origin': '*',
        'clothingItem' : item
      })
    }

    this.http.get<any>('http://localhost:8080/purchase/getPurchasableItem',httpOptions).subscribe(data => {
      console.log(data)
      this.itemData.item = item
      this.itemData.url = data
    })
  }

  clearServerData(){
    const httpOptions = {
      headers: new HttpHeaders({
        'Access-Control-Allow-Origin': '*',
      })
    }

    this.http.get<any>('http://localhost:8080/purchase/getPurchasableItem', httpOptions).subscribe(data =>{
      console.log('cleared data')
    })
  }
}
