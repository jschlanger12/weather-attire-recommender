import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule  } from '@angular/forms';
import { WeatherAttireServiceService } from '../weather-attire-service/weather-attire-service.service';

@Component({
  selector: 'app-weather-page',
  templateUrl: './weather-page.component.html',
  styleUrls: ['./weather-page.component.css']
})
export class WeatherPageComponent implements OnInit {

  public weatherSearchForm: FormGroup;
  public weatherData: any;
  public clothingData: any;

  


  constructor(private formBuilder: FormBuilder,private service: WeatherAttireServiceService) { }

  ngOnInit(): void {
    console.log('test')
    this.weatherSearchForm = this.formBuilder.group({
      location: [""]
    });
  }

  getWeatherFromAPI(formValues){
    this.service.getWeather(formValues.location)
    this.weatherData = this.service.weatherData
  }

  getClothingRecommendation(temp, description){
    this.service.getRecommendedAttire(temp, description)
    this.clothingData = this.service.clothingData
  }

  getClothingLinkData(){
    this.service.clothingData.clothing.forEach(item =>{
      this.service.getLinkToRecommendedClothingType(item)
    })
  }
}
