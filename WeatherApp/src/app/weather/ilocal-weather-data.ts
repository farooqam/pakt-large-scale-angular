interface ILocalWeatherData {
    dt: number;

    main: {
        temp: number
    };

    weather: [{
        description: string,
        icon: string
    }];

    name: string;

    sys: {
        country: string
    };
}
