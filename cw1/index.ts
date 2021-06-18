class StatsApp {
    checklistern: Array<boolean> = [];
    inputsValues: Array<number> = [];
    removeButtons: NodeList;
    allInputs: NodeListOf<HTMLInputElement>;

    i: number = 0;

    inputs: HTMLInputElement;
    id: number = 0;
    addId: number = 0;

    addInput: HTMLInputElement;
    div: HTMLDivElement;
    input: HTMLInputElement;
    removeButton: HTMLButtonElement;

    sumInput: HTMLInputElement;
    avgInput: HTMLInputElement;
    minInput: HTMLInputElement;
    maxInput: HTMLInputElement;

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
        this.id = this.addId;
        this.addId = this.addInput.valueAsNumber;
        if (this.addId < 0) {
            return;
        }
        else if (this.id < this.addId) {
            this.createInput();
            this.allInputs = document.querySelectorAll(`.data-input`);
            this.removeBtn()

        } else {
            this.removeInput();
            this.allInputs = document.querySelectorAll(`.data-input`);

        }

    }


    createInput() {

        this.div = document.createElement("div");
        this.input = document.createElement("input");
        this.removeButton = document.createElement("button");

        this.div.id = `${this.addId}`;
        this.div.classList.add(`input-div`);

        this.input.type = "Number";
        this.input.valueAsNumber = 0;
        this.input.classList.add('data-input');
        this.input.id = `data-input${this.addId}`;

        this.removeButton.textContent = "Usuń";
        this.removeButton.classList.add(`remove-button`);
        this.removeButton.id = `remove-button${this.addId}`;

        for (let i = 0; i < this.addId; i++) {


            document.querySelector(`.input-data`).appendChild(this.div);
            document.getElementById(`${this.addId}`).appendChild(this.input);
            document.getElementById(`${this.addId}`).appendChild(this.removeButton);

        }


        this.getInputs()

    }
    removeBtn() {
        this.addInput = document.querySelector(`#addinput`);
        this.removeButtons = document.querySelectorAll(`.remove-button`);
        let i = 0;
        this.removeButton = document.querySelector(`#remove-button${this.i + 1}`);
        this.removeButton.addEventListener("click", function () {
            // e.target.addEventListener('click', () => {
            this.parentElement.remove();
            console.log(this);
            i = +this.parentElement.getAttribute(`id`);
            console.log(i);
        })
        this.removeButton.addEventListener("click", () => {
            // console.log(+this.removeButton.parentElement.getAttribute(`id`));
            this.inputsValues.splice(i - 1, 1);
        });

        this.i++;
        // this.removeButton.addEventListener('click', () => {
        //     this.removeButton.parentElement.remove();
        // })




        // this.removeButtons.forEach((e) => {
        //     e.addEventListener('click', () => {
        //         i--;
        //         console.log(i);


        // console.log(e);
        // this.inputsValues.splice(+e.parentElement.getAttribute(`id`) - 1, 1);
        // e.parentElement.remove();
        // this.addInput.valueAsNumber--;
        //     })
        // });
    }

    removeInput() {
        this.allInputs = document.querySelectorAll(`.data-input`)
        // console.log(this.allInputs);
        if (this.allInputs.length == 0) {
            return;
        }
        this.allInputs.item(this.allInputs.length - 1).parentElement.remove();
        this.inputsValues.pop();
        this.watchInputsValue();
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