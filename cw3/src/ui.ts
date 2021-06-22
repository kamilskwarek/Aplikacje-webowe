export class Ui {
    weatherDiv: HTMLDivElement;
    cityNameDiv: HTMLDivElement;
    bottomDataDiv: HTMLDivElement;
    leftPanelDiva: HTMLDivElement;
    skyDiv: HTMLDivElement;
    tempertureDiv: HTMLDivElement;
    rightPanelDiv: HTMLDivElement;
    pressureDiv: HTMLDivElement;
    humidityDiv: HTMLDivElement;

    addCity: HTMLButtonElement;


    constructor() {
        this.addCity = document.querySelector('.addCityBtn');
        this.addCity.addEventListener("click", () => this.test());

    }

    test() {
        const data = localStorage.getItem('weatherData');
        console.log(data)
    }

    startUi() {
        this.createDivs();
        this.addClassesToDiv();
        this.generateDivs();

    }

    createDivs(): void {
        this.weatherDiv = document.createElement('div');
        this.cityNameDiv = document.createElement('div');
        this.bottomDataDiv = document.createElement('div');
        this.leftPanelDiva = document.createElement('div');
        this.skyDiv = document.createElement('div');
        this.tempertureDiv = document.createElement('div');
        this.rightPanelDiv = document.createElement('div');
        this.pressureDiv = document.createElement('div');
        this.humidityDiv = document.createElement('div');

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

    // addIdToDivs() {
    //     this.weatherDiv.id=
    //     this.cityNameDiv.id=
    //     this.bottomDataDiv.id=
    //     this.leftPanelDiva.id=
    //     this.skyDiv.id=
    //     this.tempertureDiv.id=
    //     this.rightPanelDiv.id=
    //     this.pressureDiv.id=
    //     this.humidityDiv.id=
    // }

    generateDivs() {
        document.querySelector('.weatherDivConteiner').appendChild(this.weatherDiv);
        document.querySelector('.weatherDiv').appendChild(this.cityNameDiv);
        document.querySelector('.weatherDiv').appendChild(this.bottomDataDiv);
        document.querySelector('.bottomData').appendChild(this.leftPanelDiva);
        document.querySelector('.bottomData').appendChild(this.rightPanelDiv);
        document.querySelector('.leftPanel').appendChild(this.skyDiv);
        document.querySelector('.leftPanel').appendChild(this.tempertureDiv);
        document.querySelector('.rightPanel').appendChild(this.pressureDiv);
        document.querySelector('.rightPanel').appendChild(this.humidityDiv);
    }
}