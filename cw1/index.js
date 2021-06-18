var StatsApp = /** @class */ (function () {
    function StatsApp() {
        this.checklistern = [];
        this.inputsValues = [];
        this.i = 0;
        this.id = 0;
        this.addId = 0;
        this.startApp();
    }
    StatsApp.prototype.startApp = function () {
        this.addInpusts();
    };
    StatsApp.prototype.addInpusts = function () {
        var _this = this;
        this.addInput = document.querySelector("#addinput");
        this.addInput.addEventListener('input', function () { return _this.checkAddInputValue(); });
    };
    StatsApp.prototype.checkAddInputValue = function () {
        this.id = this.addId;
        this.addId = this.addInput.valueAsNumber;
        if (this.addId < 0) {
            return;
        }
        else if (this.id < this.addId) {
            this.createInput();
            this.allInputs = document.querySelectorAll(".data-input");
            this.removeBtn();
        }
        else {
            this.removeInput();
            this.allInputs = document.querySelectorAll(".data-input");
        }
    };
    StatsApp.prototype.createInput = function () {
        this.div = document.createElement("div");
        this.input = document.createElement("input");
        this.removeButton = document.createElement("button");
        this.div.id = "" + this.addId;
        this.div.classList.add("input-div");
        this.input.type = "Number";
        this.input.valueAsNumber = 0;
        this.input.classList.add('data-input');
        this.input.id = "data-input" + this.addId;
        this.removeButton.textContent = "Usuń";
        this.removeButton.classList.add("remove-button");
        this.removeButton.id = "remove-button" + this.addId;
        for (var i = 0; i < this.addId; i++) {
            document.querySelector(".input-data").appendChild(this.div);
            document.getElementById("" + this.addId).appendChild(this.input);
            document.getElementById("" + this.addId).appendChild(this.removeButton);
        }
        this.getInputs();
    };
    StatsApp.prototype.removeBtn = function () {
        var _this = this;
        this.addInput = document.querySelector("#addinput");
        this.removeButtons = document.querySelectorAll(".remove-button");
        var i = 0;
        this.removeButton = document.querySelector("#remove-button" + (this.i + 1));
        this.removeButton.addEventListener("click", function () {
            // e.target.addEventListener('click', () => {
            this.parentElement.remove();
            console.log(this);
            i = +this.parentElement.getAttribute("id");
            console.log(i);
        });
        this.removeButton.addEventListener("click", function () {
            // console.log(+this.removeButton.parentElement.getAttribute(`id`));
            _this.inputsValues.splice(i - 1, 1);
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
    };
    StatsApp.prototype.removeInput = function () {
        this.allInputs = document.querySelectorAll(".data-input");
        // console.log(this.allInputs);
        if (this.allInputs.length == 0) {
            return;
        }
        this.allInputs.item(this.allInputs.length - 1).parentElement.remove();
        this.inputsValues.pop();
        this.watchInputsValue();
    };
    StatsApp.prototype.getInputs = function () {
        this.sumInput = document.querySelector('#sum');
        this.avgInput = document.querySelector('#avg');
        this.minInput = document.querySelector('#min');
        this.maxInput = document.querySelector('#max');
        this.allInputs = document.querySelectorAll(".data-input");
        this.watchInputsValue();
    };
    StatsApp.prototype.watchInputsValue = function () {
        var _this = this;
        this.allInputs.forEach(function (e) {
            e.addEventListener('input', function () { return _this.computeAndShowData(); });
        });
    };
    StatsApp.prototype.computeAndShowData = function () {
        var _this = this;
        this.allInputs = document.querySelectorAll(".data-input");
        var i = this.addId;
        for (i = 0; i < this.allInputs.length; i++) {
            this.inputsValues.pop();
        }
        this.allInputs.forEach(function (e) {
            _this.inputsValues.push(e.valueAsNumber);
        });
        console.log(this.inputsValues);
        // console.log(this.inputsValues);
        var sum = this.inputsValues.reduce(function (a, b) { return a + b; }, 0);
        var avg = sum / this.inputsValues.length;
        var min = Math.min.apply(Math, this.inputsValues);
        var max = Math.max.apply(Math, this.inputsValues);
        this.showStats(sum, avg, min, max);
    };
    StatsApp.prototype.showStats = function (sum, avg, min, max) {
        this.sumInput.value = sum.toString();
        this.avgInput.value = avg.toString();
        this.minInput.value = min.toString();
        this.maxInput.value = max.toString();
    };
    return StatsApp;
}());
var statsApp = new StatsApp();
