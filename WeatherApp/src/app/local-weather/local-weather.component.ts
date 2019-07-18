import { Component, OnInit } from '@angular/core';
import { ILocalWeather } from '../ilocal-weather';
import { WeatherService } from '../weather/weather.service';

@Component({
  selector: 'app-local-weather',
  templateUrl: './local-weather.component.html',
  styleUrls: ['./local-weather.component.css']
})
export class LocalWeatherComponent implements OnInit {

  localWeather: ILocalWeather;

  constructor(private weatherService: WeatherService) {
    this.localWeather = {
      city: 'Redmond',
      country: 'US',
      date: new Date(),
      image: 'assets/img/sunny.png',
      temperature: 72,
      description: 'sunny'
    } as ILocalWeather;
  }

  ngOnInit() {
    this.weatherService.getLocalWeather('Seattle', 'US')
      .subscribe((data) => this.localWeather = data);
  }

}
