import { Api } from "./api";

export class CityInput{
    api = new Api;

    cityNameInput: HTMLInputElement;
    addCity: HTMLButtonElement;

    constructor(){
        this.getCityValue();
    }
    
    getCityValue() {
        this.addCity = document.querySelector('.addCityBtn');
        this.cityNameInput = document.querySelector('.cityNameInput');
        this.addCity.addEventListener('click', () => this.api.getCityInfo(this.cityNameInput.value));
    }
}