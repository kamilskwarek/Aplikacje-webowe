import { Ui } from "./ui";
import { Api } from "./api";

export class RefreshData{
    api = new Api;

    cityNameArray: Array<string>;
    localStorageLenght: number;
    localWetherDataAsArray: Array<any>;

    cityName: string;
    addCity: HTMLButtonElement;
    opwApiKey = '1e4b2024641cb3682285770d3bebc4e8';

    constructor(){
        this.getLocalStorageLenght()
        setInterval(() => this.getLocalStorageLenght(), 120000)   
    }


    getLocalStorageLenght(){
        console.log("odświezyłem dane")
        this.cityNameArray = [];
        const localWetherData = localStorage.getItem('weatherData');

        
        if(localWetherData == null){
            return;
        }else{
            this.localWetherDataAsArray = JSON.parse(localWetherData);
            this.localStorageLenght = this.localWetherDataAsArray.length;
            this.pushCityNameToArray();
            const removeLocalData = localStorage.removeItem('weatherData');
            removeLocalData;

        }
    }

    pushCityNameToArray(){
        for(let i =0; i < this.localStorageLenght; i++)
        this.cityNameArray.push(this.localWetherDataAsArray[i].name)
        console.log(this.cityNameArray);
        this.getCityValue();

    }


    getCityValue() {
        let cityName;
        for(let i = 0; i < this.cityNameArray.length; i++){
            cityName = this.cityNameArray[i];
            this.api.getCityInfo(cityName);
        }
    }

}