class StatsApp {

    inputsValues: Array<number> = [];
    allInputs: NodeListOf<HTMLInputElement>;

    divContainer: HTMLDivElement;
    div: HTMLDivElement;
    addInput: HTMLInputElement;
    input: HTMLInputElement;
    removeButton: HTMLButtonElement;

    sumInput: HTMLInputElement;
    avgInput: HTMLInputElement;
    minInput: HTMLInputElement;
    maxInput: HTMLInputElement;

    addInputCheck: number;
    deletedInputID: number;
    id: number = 0;
    addId: number = 0;




    constructor() {
        this.startApp();
    }
    startApp() {

        this.addInpusts();

    }
    addInpusts() {
        this.addInput = document.querySelector(`#addinput`);
        this.addInput.addEventListener('input', () => this.checkAddInputValue())


    }
    checkAddInputValue() {
        this.addId = this.addInput.valueAsNumber;
        if (this.addId < 0) {
            return;
        }
        else if (this.addId > this.id) {

            this.createInput();

        } else {
            this.reduceInputNumber()
        }
        this.id = this.addId;

    }

    createInput() {


        this.divContainer = document.querySelector('.input-data');
        this.divContainer.innerHTML = '';
        // console.log(number);
        let y = this.addInput.valueAsNumber;


        for (let i = 0; i < y; i++) {

            this.div = document.createElement("div");
            this.div.id = `${i + 1}`;
            this.div.classList.add(`input-div`);
            document.querySelector(`.input-data`).appendChild(this.div);

            this.input = document.createElement("input");
            this.removeButton = document.createElement("button");



            this.input.type = "Number";
            this.input.classList.add('data-input');
            this.input.id = `data-input${i}`;

            this.removeButton.textContent = "Usuń";
            this.removeButton.classList.add(`remove-button`);
            this.removeButton.addEventListener("click", (e: EventTarget) => this.removeBtn(e))


            document.getElementById(`${i + 1}`).appendChild(this.input);
            document.getElementById(`${i + 1}`).appendChild(this.removeButton);

            if (this.inputsValues[i] !== undefined) {
                this.input.valueAsNumber = this.inputsValues[i];
            }
            else if (this.inputsValues[i] === undefined) {
                this.inputsValues[i] = 0;
                this.input.valueAsNumber = this.inputsValues[i];
            }
        }
        this.addInputCheck = this.addInput.valueAsNumber;
        console.log(this.inputsValues);
        this.getInputs()
    }

    reduceInputNumber() {
        if (this.addInput.valueAsNumber < this.inputsValues.length) {
            let i = this.inputsValues.length;
            let y = this.addInput.valueAsNumber;
            let sum = i - y;
            for (let i = 0; i < sum; i++) {
                console.log('test')
                this.inputsValues.pop();
            }
            this.createInput()
        } else {
            this.createInput()
        }
    }

    removeBtn(e: EventTarget) {
        const target = e.target;
        console.log(e.target);
        this.deletedInputID = target.parentElement.getAttribute(`id`);
        console.log(this.deletedInputID)
        this.inputsValues.splice(this.deletedInputID - 1, 1);
        console.log(this.inputsValues)
        this.divContainer = document.querySelector('.input-data');
        this.divContainer.innerHTML = '';


        this.addInput.valueAsNumber--;
        this.checkAddInputValue();

    }

    getInputs() {
        this.sumInput = document.querySelector('#sum');
        this.avgInput = document.querySelector('#avg');
        this.minInput = document.querySelector('#min');
        this.maxInput = document.querySelector('#max');

        this.allInputs = document.querySelectorAll(`.data-input`);
        this.watchInputsValue()
    }

    watchInputsValue() {
        this.allInputs.forEach((e) => {
            e.addEventListener('input', () => this.computeAndShowData());
        })
    }

    computeAndShowData() {
        this.allInputs = document.querySelectorAll(`.data-input`);
        let i = this.addId;
        for (i = 0; i < this.allInputs.length; i++) {
            this.inputsValues.pop();
        }
        this.allInputs.forEach((e) => {
            this.inputsValues.push(e.valueAsNumber);

        })
        console.log(this.inputsValues);
        // console.log(this.inputsValues);

        const sum = this.inputsValues.reduce((a: number, b: number) => a + b, 0);
        const avg = sum / this.inputsValues.length;
        const min = Math.min(...this.inputsValues);
        const max = Math.max(...this.inputsValues);

        this.showStats(sum, avg, min, max);
    }
    showStats(sum: number, avg: number, min: number, max: number) {
        this.sumInput.value = sum.toString();
        this.avgInput.value = avg.toString();
        this.minInput.value = min.toString();
        this.maxInput.value = max.toString();
    }


}
const statsApp = new StatsApp();