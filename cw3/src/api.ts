import { Ui } from "./ui";

export class Api {
    ui = new Ui;

    cityNameInput: HTMLInputElement;
    addCity: HTMLButtonElement;
    opwApiKey = '1e4b2024641cb3682285770d3bebc4e8';


    getCityValue() {
        this.addCity = document.querySelector('.addCityBtn');
        this.cityNameInput = document.querySelector('.cityNameInput');
        this.addCity.addEventListener('click', () => this.getCityInfo(this.cityNameInput.value));
    }

    async getCityInfo(city: string) {
        const weather = await this.getWeather(city);
        if(weather ==undefined){
            alert('Nieprawidłowa nazwa')
            return
        }else{
            this.saveData(weather);
        }
        
    }
    async getWeather(city: string): Promise<any> {
        const openWeatherUrl = `http://api.openweathermap.org/data/2.5/weather?q=${city}&lang=pl&units=metric&&APPID=${this.opwApiKey}`;
        const weatherResponse = await fetch(openWeatherUrl);
        // console.log(weatherResponse.status)
        if(weatherResponse.status == 404){
            // console.log('nie przeszło')
            return;
        }else{
            // console.log('przeszło')
            const weatherData = await weatherResponse.json();
            // console.log(weatherData);
            return weatherData;
        }

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
        this.ui.startUi();
        
    }
    getData() {

        const data = localStorage.getItem('weatherData');
        if (data) {
            return JSON.parse(data);
        }
        
        return [];

    }

}