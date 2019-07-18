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
  }

  ngOnInit() {
    this.weatherService.getLocalWeather('Seattle', 'US')
      .subscribe((data) => this.localWeather = data);
  }

}
