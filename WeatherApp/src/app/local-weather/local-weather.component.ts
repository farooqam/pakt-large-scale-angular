import { Component, OnInit } from '@angular/core';
import { ILocalWeather } from '../ilocal-weather';

@Component({
  selector: 'app-local-weather',
  templateUrl: './local-weather.component.html',
  styleUrls: ['./local-weather.component.css']
})
export class LocalWeatherComponent implements OnInit {

  localWeather: ILocalWeather;
  constructor() {
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
  }

}
