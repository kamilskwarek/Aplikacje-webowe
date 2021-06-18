class StatsApp2 {
    inputsValues: Array<number> = [];

    removeButtons: NodeList;
    addId: number = 0;


    addButton: HTMLButtonElement;
    input: HTMLInputElement;
    removeButton: HTMLButtonElement;
    div: HTMLDivElement;

    sumInput: HTMLElement;
    avgInput: HTMLElement;
    minInput: HTMLElement;
    maxInput: HTMLElement;

    constructor() {
        this.startApp();
    }

    startApp() {
        this.addInpusts();

    }
    addInpusts() {
        this.addId = 0;
        this.addButton = document.querySelector(`.addButton`);
        this.addButton.addEventListener('click', () => this.createInput())
        this.addButton.addEventListener('click', () => this.getInputs())

    }
    createInput() {
        this.div = document.createElement("div");
        this.input = document.createElement("input");
        this.removeButton = document.createElement("button");

        this.div.id = `input-div${this.addId}`;
        this.div.classList.add(`input-div`);
        this.input.type = "number";
        this.input.classList.add(`data-input`);
        this.input.id = `data-input${this.addId}`;
        this.input.valueAsNumber = this.addId;
        this.removeButton.textContent = "Usuń";
        this.removeButton.classList.add(`remove-button`);

        document.querySelector(`.input-data`).appendChild(this.div);
        document.getElementById(`input-div${this.addId}`).appendChild(this.input);
        document.getElementById(`input-div${this.addId}`).appendChild(this.removeButton);

        this.addId++;

        this.removeButtons = document.querySelectorAll(`.remove-button`);



        this.removeButtons.forEach((e, i) => {
            e.addEventListener('click', () => {
                e.parentElement.remove();
            })
        });
        this.watchInputsValue();
    }
    // removeInput(i) {

    // this.dataDiv = document.querySelector(`#input-div${i}`);
    // this.dataDiv.remove();
    // this.addId--;


    // this.removeButtons.forEach((element, index) => {
    //     element.addEventListener('click', () => {
    //         this.inputData.removeChild(this.dataInputs[index - 1]);
    //         console.log(index);
    //     })
    // });
    // console.log(this.removeButtons);

    // console.log(this.dataInputs);

    // }

    getInputs() {
        this.input = document.querySelector(`#data-input${this.addId - 1}`);
        console.log(this.input)
        this.sumInput = document.querySelector('#sum');
        this.avgInput = document.querySelector('#avg');
        this.minInput = document.querySelector('#min');
        this.maxInput = document.querySelector('#max');

    }

    watchInputsValue() {
        this.input.addEventListener('input', () => this.computeAndShowData());
        console.log(this.input);
    }

    computeAndShowData() {
        this.inputsValues.push(this.input.valueAsNumber);
        console.log(this.inputsValues);


        // const data1 = +this.data1Input.value;
        // const data2 = +this.data2Input.value;
        // const data3 = +this.data3Input.value;
        // const data4 = +this.data4Input.value;

        // const sum = data1 + data2 + data3 + data4;
        // const avg = sum / 4;
        // const min = Math.min(data1, data2, data3, data4);
        // const max = Math.max(data1, data2, data3, data4);


        // this.showStats(sum, avg, min, max)
    }

    // showStats(sum: number, avg: number, min: number, max: number,) {
    //     this.sumInput.value = sum.toString();
    //     this.avgInput.value = avg.toString();
    //     this.minInput.value = min.toString();
    //     this.maxInput.value = max.toString();
    //     // }
    // }

}
const statsApp2 = new StatsApp();