var StatsApp = /** @class */ (function () {
    function StatsApp() {
        this.inputsValues = [];
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
        this.addId = this.addInput.valueAsNumber;
        if (this.addId < 0) {
            return;
        }
        else if (this.addId > this.id) {
            this.createInput();
        }
        else {
            this.reduceInputNumber();
        }
        this.id = this.addId;
    };
    StatsApp.prototype.createInput = function () {
        var _this = this;
        this.divContainer = document.querySelector('.input-data');
        this.divContainer.innerHTML = '';
        // console.log(number);
        var y = this.addInput.valueAsNumber;
        for (var i = 0; i < y; i++) {
            this.div = document.createElement("div");
            this.div.id = "" + (i + 1);
            this.div.classList.add("input-div");
            document.querySelector(".input-data").appendChild(this.div);
            this.input = document.createElement("input");
            this.removeButton = document.createElement("button");
            this.input.type = "Number";
            this.input.classList.add('data-input');
            this.input.id = "data-input" + i;
            this.removeButton.textContent = "Usuń";
            this.removeButton.classList.add("remove-button");
            this.removeButton.addEventListener("click", function (e) { return _this.removeBtn(e); });
            document.getElementById("" + (i + 1)).appendChild(this.input);
            document.getElementById("" + (i + 1)).appendChild(this.removeButton);
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
        this.getInputs();
    };
    StatsApp.prototype.reduceInputNumber = function () {
        if (this.addInput.valueAsNumber < this.inputsValues.length) {
            var i = this.inputsValues.length;
            var y = this.addInput.valueAsNumber;
            var sum = i - y;
            for (var i_1 = 0; i_1 < sum; i_1++) {
                console.log('test');
                this.inputsValues.pop();
            }
            this.createInput();
        }
        else {
            this.createInput();
        }
    };
    // removeInput() {
    //     // this.allInputs = document.querySelectorAll(`.data-input`)
    //     // // console.log(this.allInputs);
    //     // if (this.allInputs.length == 0) {
    //     //     return;
    //     // }
    //     // this.addInput.valueAsNumber--;
    //     this.inputsValues.pop();
    //     this.createInput();
    // }
    StatsApp.prototype.removeBtn = function (e) {
        var target = e.target;
        console.log(e.target);
        this.deletedInputID = target.parentElement.getAttribute("id");
        console.log(this.deletedInputID);
        this.inputsValues.splice(this.deletedInputID - 1, 1);
        console.log(this.inputsValues);
        this.divContainer = document.querySelector('.input-data');
        this.divContainer.innerHTML = '';
        this.addInput.valueAsNumber--;
        this.checkAddInputValue();
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
