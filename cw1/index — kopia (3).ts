class StatsApp1 {
    inputsValues: Array<number> = [];


    removeButtons: NodeListOf<HTMLButtonElement>;
    allInputs: NodeListOf<HTMLInputElement>;
    divContainer: HTMLDivElement;
    allDiv: NodeListOf<HTMLDivElement>;

    deletedInputID: number;

    addInput: HTMLInputElement;
    div: HTMLDivElement;
    input: HTMLInputElement;
    removeButton: HTMLButtonElement;

    i: number = 1;
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
        this.id = this.addId;
        this.addId++;
        if (this.addId < 0) {
            return;
        }
        else if (this.addId > this.id) {
            this.inputsValues.length = this.addId;
            // console.log(this.inputsValues);
            // console.log(this.inputsValues.length);
            this.createInput(this.inputsValues.length);
            // this.allInputs = document.querySelectorAll(`.data-input`);
            // this.removeBtn()



        } else if (this.id > this.addId) {
            this.removeInput();
            // this.allInputs = document.querySelectorAll(`.data-input`);
            // console.log(this.inputsValues);
        }
        this.id = this.addId;

    }

    createInput(number: number) {

        console.log(number);
        this.div = document.createElement("div");
        this.input = document.createElement("input");
        this.removeButton = document.createElement("button");

        this.div.id = `${number}`;
        this.div.classList.add(`input-div`);

        this.input.type = "Number";
        this.input.classList.add('data-input');
        this.input.id = `data-input${number}`;

        this.removeButton.textContent = "Usuń";
        this.removeButton.classList.add(`remove-button`);
        // this.removeButton.id = `remove-button${this.addId}`;
        this.removeButton.addEventListener("click", (e: EventTarget) => this.removeBtn(e))


        for (let i = 0; i < number; i++) {
            // console.log("test")
            let a = document.querySelector(`.input-data`).appendChild(this.div);
            let b = document.getElementById(`${number}`).appendChild(this.input);
            let c = document.getElementById(`${number}`).appendChild(this.removeButton);

            if (this.inputsValues[i] !== undefined) {
                this.input.valueAsNumber = this.inputsValues[i];
            }
            else if (this.inputsValues[i] === undefined) {
                this.inputsValues[i] = this.addId;
                this.input.valueAsNumber = this.inputsValues[i];
            }
        }
        // console.log(this.inputsValues);
    }

    removeInput() {
        this.allInputs = document.querySelectorAll(`.data-input`)
        // console.log(this.allInputs);
        if (this.allInputs.length == 0) {
            return;
        }
        this.allInputs.item(this.inputsValues.length - 1).parentElement.remove();
        this.inputsValues.pop();
        console.log(this.inputsValues)
    }

    removeBtn(e: EventTarget) {
        const target = e.target;
        this.deletedInputID = target.parentElement.getAttribute(`id`);
        this.inputsValues.splice(this.deletedInputID, 1);
        this.divContainer = document.querySelector('.input-data');
        this.divContainer.innerHTML = '';


        this.id = 0;
        this.addId = 0;
        console.log(this.inputsValues.length);
        this.createInput(this.inputsValues.length)
    }
    // this.removeButton.addEventListener("click", function () {
    //     // e.target.addEventListener('click', () => {
    //     this.parentElement.remove();
    //     console.log(this);
    //     i = +this.parentElement.getAttribute(`id`);
    //     console.log(i);
    // })
    // this.removeButton.addEventListener("click", () => {
    //     // console.log(+this.removeButton.parentElement.getAttribute(`id`));
    //     this.inputsValues.splice(i - 1, 1);
    // });

    //     this.i++;
    // }
}
const statsApp1 = new StatsApp();