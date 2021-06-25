

export class loadLocalStorage{
    
    cityNameValue: any;
    skyValue: string;
    tempertureValue: string;
    pressureValue: string;
    humidityValue:  string;

    cityNameDiv: HTMLDivElement;
    skyDiv: HTMLDivElement;
    tempertureDiv: HTMLDivElement;
    pressureSpan: HTMLSpanElement;
    humiditySpan: HTMLSpanElement;
    

    localWetherDataAsArray: Array<any>;
    localStorageLenght: number;
    index: number;

    start(){
        this.getLocalStorageLenght()
        for(let i = 0; i < this.localStorageLenght; i++){
            if(this.localWetherDataAsArray[i] == null){
                return
            }else{
                this.selectDataPalces(i);
                this.loadData(i);
                this.pasteData();
            }
            
         }
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

    selectDataPalces(i:number){
        this.cityNameDiv = document.querySelector(`#cityNameDiv-${i}`)
        this.skyDiv = document.querySelector(`#sky-${i}`)
        this.tempertureDiv = document.querySelector(`#temperture-${i}`)
        this.pressureSpan = document.querySelector(`#pressureSpan-${i}`)
        this.humiditySpan = document.querySelector(`#humiditySpan-${i}`)
    }

    loadData(i: number){
       
        this.cityNameValue = this.localWetherDataAsArray[i].name;
        // console.log(this.cityNameValue)
        this.skyValue = this.localWetherDataAsArray[i].weather[0].main;
        // console.log(this.skyValue)
        this.tempertureValue = Math.round(this.localWetherDataAsArray[i].main.temp)+'ᵒC';
        // console.log(this.tempertureValue)
        this.pressureValue = this.localWetherDataAsArray[i].main.pressure;
        // console.log(this.pressureValue)
        this.humidityValue = this.localWetherDataAsArray[i].main.humidity + "%";
        // console.log(this.humidityValue)
    }

    pasteData(){
        this.cityNameDiv.innerHTML = this.cityNameValue;
        this.skyDiv.innerHTML =this.skyValue;
        this.tempertureDiv.innerHTML = this.tempertureValue;
        this.pressureSpan.innerHTML = `Ciśnienie<br />${this.pressureValue}hPa`
        this.humiditySpan.innerHTML = `wilgotność<br />${this.pressureValue}`
    }

}