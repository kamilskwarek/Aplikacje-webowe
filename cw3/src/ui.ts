import { loadLocalStorage } from "./loadLocalStorage";


export class Ui {
    loadStorage = new loadLocalStorage;

    weatherDiv: HTMLDivElement;
    cityNameDiv: HTMLDivElement;
    bottomDataDiv: HTMLDivElement;
    leftPanelDiva: HTMLDivElement;
    skyDiv: HTMLDivElement;
    tempertureDiv: HTMLDivElement;
    rightPanelDiv: HTMLDivElement;
    pressureDiv: HTMLDivElement;
    humidityDiv: HTMLDivElement;

    presureSpan: HTMLSpanElement;
    humiditySpan: HTMLSpanElement;

    addCity: HTMLButtonElement;

    divContainer: HTMLDivElement;

    localStorageLenght: number;
    divsIndex: number=0;
    localWetherDataAsArray: Array<any>

    start(){
        this.addCity = document.querySelector('.addCityBtn');
        this.addCity.addEventListener("click", () => this.startUi());
    }

    startUi() {
        this.getLocalStorageLenght();
        this.removeOldDivs();
        for(let i = 0; i < this.localStorageLenght; i++){
            if(this.localWetherDataAsArray[i] == null){
                return
            }else{
           this.createDivs();
           this.addClassesToDiv();
           this.addIdToDivs(i);
           this.generateDivs(i);
            }
        };

        
        this.loadLocalStorage();
       
    }

    removeOldDivs(){
      this.divContainer = document.querySelector('.weatherDivConteiner');
      this.divContainer.innerHTML='';
    }

    getLocalStorageLenght(){
        const localWetherData = localStorage.getItem('weatherData');

        
        if(localWetherData == null){
            return;
        }else{
            this.localWetherDataAsArray = JSON.parse(localWetherData);
            this.localStorageLenght = this.localWetherDataAsArray.length;
        }
    }

    createDivs() {
        this.weatherDiv = document.createElement('div');
        this.cityNameDiv = document.createElement('div');
        this.bottomDataDiv = document.createElement('div');
        this.leftPanelDiva = document.createElement('div');
        this.skyDiv = document.createElement('div');
        this.tempertureDiv = document.createElement('div');
        this.rightPanelDiv = document.createElement('div');
        this.pressureDiv = document.createElement('div');
        this.humidityDiv = document.createElement('div');
        this.presureSpan = document.createElement('span');
        this.humiditySpan = document.createElement('span');

    }


    addClassesToDiv() {
        this.weatherDiv.classList.add('weatherDiv')
        this.cityNameDiv.classList.add('cityNameDiv')
        this.bottomDataDiv.classList.add('bottomData')
        this.leftPanelDiva.classList.add('leftPanel')
        this.skyDiv.classList.add('sky')
        this.tempertureDiv.classList.add('temperture')
        this.rightPanelDiv.classList.add('rightPanel')
        this.pressureDiv.classList.add('pressure')
        this.humidityDiv.classList.add('humidity')
    }

    addIdToDivs(i:number) {
        // console.log(i)
        this.weatherDiv.id = `weatherDiv-${i}`;
        this.cityNameDiv.id =`cityNameDiv-${i}`;
        this.bottomDataDiv.id =`bottomData-${i}`;
        this.leftPanelDiva.id =`leftPanel-${i}`;
        this.skyDiv.id =`sky-${i}`;
        this.tempertureDiv.id =`temperture-${i}`;
        this.rightPanelDiv.id =`rightPanel-${i}`;
        this.pressureDiv.id =`pressure-${i}`;
        this.humidityDiv.id =`humidity-${i}`;
        this.presureSpan.id = `pressureSpan-${i}`;
        this.humiditySpan.id = `humiditySpan-${i}`;
    }

    generateDivs(i:number) {
        document.querySelector('.weatherDivConteiner').appendChild(this.weatherDiv);
        document.querySelector(`#weatherDiv-${i}`).appendChild(this.cityNameDiv);
        document.querySelector(`#weatherDiv-${i}`).appendChild(this.bottomDataDiv);
        document.querySelector(`#bottomData-${i}`).appendChild(this.leftPanelDiva);
        document.querySelector(`#bottomData-${i}`).appendChild(this.rightPanelDiv);
        document.querySelector(`#leftPanel-${i}`).appendChild(this.skyDiv);
        document.querySelector(`#leftPanel-${i}`).appendChild(this.tempertureDiv);
        document.querySelector(`#rightPanel-${i}`).appendChild(this.pressureDiv);
        document.querySelector(`#rightPanel-${i}`).appendChild(this.humidityDiv);
        document.querySelector(`#pressure-${i}`).appendChild( this.presureSpan);
        document.querySelector(`#humidity-${i}`).appendChild(this.humiditySpan);3
    }

    loadLocalStorage(){
        this.loadStorage.start();
    }
}