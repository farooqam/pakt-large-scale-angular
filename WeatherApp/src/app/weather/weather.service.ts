import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ILocalWeather } from '../ilocal-weather';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private httpClient: HttpClient) { }

  getLocalWeather(city: string, country: string): Observable<ILocalWeather> {
    return this.httpClient.get<ILocalWeatherData>(
      `${environment.baseUrl}?q=${city},${country}&appid=${environment.appId}`
      ).pipe(
        map(data => this.transform(data))
      );
  }

  private transform(data: ILocalWeatherData) : ILocalWeather {
    return {
      city: data.name,
      country: data.sys.country,
      date: new Date(data.dt * 1000),
      image: `http://openweathermap.org/img/w/${data.weather[0].icon}.png`,
      temperature: this.convertKelvinToFarenheit(data.main.temp),
      description: data.weather[0].description
    }
  }

  private convertKelvinToFarenheit(kelvin: number): number {
    return kelvin * 9 / 5 - 459.67;
  }
}
