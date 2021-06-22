


export class Api {

    cityNameInput: HTMLInputElement;
    addCity: HTMLButtonElement;
    opwApiKey = '1e4b2024641cb3682285770d3bebc4e8';


    constructor() {
        this.getCityValue();


    }

    getCityValue() {
        this.addCity = document.querySelector('.addCityBtn');
        this.addCity.addEventListener('click', () => this.getCityInfo((this.getCityName())));
    }

    getCityName() {
        this.cityNameInput = document.querySelector('.cityNameInput');
        return this.cityNameInput.value;
    }



    async getCityInfo(city: string) {
        const weather = await this.getWeather(this.getCityName());
        this.saveData(weather);
    }
    async getWeather(city: string): Promise<any> {
        const openWeatherUrl = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&&APPID=${this.opwApiKey}`;
        const weatherResponse = await fetch(openWeatherUrl);
        const weatherData = await weatherResponse.json();
        // console.log(weatherData);
        return weatherData;
    }
    saveData(data: any) {
        let index: number;
        const currentData = this.getData();
        if (!currentData) {
            index = 0;

        } else if (currentData) {
            index = currentData.length;
        }

        currentData[index] = data;
        localStorage.setItem('weatherData', JSON.stringify(currentData));
    }
    getData() {

        const data = localStorage.getItem('weatherData');
        if (data) {
            return JSON.parse(data);
        }

        return [];

    }

}