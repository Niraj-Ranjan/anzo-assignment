import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  public version;
  public url;
  public appId;

  constructor(private httpClient: HttpClient) {
    this.version = '2.5';
    this.appId = environment.appId;
  }

  getWeatherDataByCityName(cityName: string) {
    this.url = '/data/' + this.version + '/weather';
    let queryParams = new HttpParams();
    queryParams = queryParams.set('q', cityName);
    queryParams = queryParams.set('appid', this.appId);
    let requestOptions = {
      params: queryParams,
    };
    return this.httpClient.get(this.url, requestOptions);
  }
}
