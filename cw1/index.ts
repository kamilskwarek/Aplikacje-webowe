class StatsApp {
    inputsData: Array<number> = [];
    number: number = 1;

    sumInput: HTMLInputElement;
    avgInput: HTMLInputElement;
    minInput: HTMLInputElement;
    maxInput: HTMLInputElement;

    constructor() {
        this.startApp();
    }

    startApp() {
        this.getInputs();
        this.watchInputsValue();
    }

    getInputs() {
        this.inputsData.forEach(() => {
            document.querySelector('.data');
        });

        answers.forEach((element) => {
            console.log(element)
        });
        this.sumInput = document.querySelector('#sum');
        this.avgInput = document.querySelector('#avg');
        this.minInput = document.querySelector('#min');
        this.maxInput = document.querySelector('#max');
    }

    watchInputsValue() {
        this.data1Input.addEventListener('input', () => this.computeAndShowData());
        this.data2Input.addEventListener('input', () => this.computeAndShowData());
        this.data3Input.addEventListener('input', () => this.computeAndShowData());
        this.data4Input.addEventListener('input', () => this.computeAndShowData());
    }

    computeAndShowData() {
        const data1 = +this.data1Input.value;
        const data2 = +this.data2Input.value;
        const data3 = +this.data3Input.value;
        const data4 = +this.data4Input.value;

        const sum = data1 + data2 + data3 + data4;
        const avg = sum / 4;
        const min = Math.min(data1, data2, data3, data4);
        const max = Math.max(data1, data2, data3, data4);


        this.showStats(sum, avg, min, max)
    }

    showStats(sum: number, avg: number, min: number, max: number,) {
        this.sumInput.value = sum.toString();
        this.avgInput.value = avg.toString();
        this.minInput.value = min.toString();
        this.maxInput.value = max.toString();
    }
}

const statsApp = new StatsApp();