import { Component, OnInit } from '@angular/core';
import { WeatherService, ConstantsService } from '../services/index';

@Component({
  templateUrl: 'weather.component.html',
})
export class WeatherComponent implements OnInit {
  cityList: any[];
  selectedCity: string;
  weatherDetails: any[];
  response: any;
  loading: boolean;
  constructor(
    private WeatherService: WeatherService,
    private constantsService: ConstantsService
  ) {}

  ngOnInit(): void {
    this.selectedCity = '';
    this.weatherDetails = [];
    this.cityList = this.constantsService.getCity();
  }

  getWeatherDataByCityName() {
    this.loading = true;
    if (this.selectedCity) {
      this.WeatherService.getWeatherDataByCityName(this.selectedCity).subscribe(
        (data) => {
          console.log(data);
          this.response = data;
          let weatherDetail = {
            name: this.response['name'],
            description:
              this.response['weather'].length > 0
                ? this.response['weather'][0]['description']
                : '--',
            temprature: this.response['main']['temp'],
          };
          this.weatherDetails.push(weatherDetail);
          this.loading = false;

          console.log(this.weatherDetails);
        },
        (error) => {
          console.log(
            'Error occured while calling get weather data by city name ',
            error
          );
          this.loading = false;
        }
      );
    }
  }
}
