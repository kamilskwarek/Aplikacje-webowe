var StatsApp = /** @class */ (function () {
    function StatsApp() {
        this.inputsData = [];
        this.number = 1;
        this.startApp();
    }
    StatsApp.prototype.startApp = function () {
        this.getInputs();
        this.watchInputsValue();
    };
    StatsApp.prototype.getInputs = function () {
        this.inputsData.forEach(function () {
            document.querySelector('.data');
        });
        answers.forEach(function (element) {
            console.log(element);
        });
        this.sumInput = document.querySelector('#sum');
        this.avgInput = document.querySelector('#avg');
        this.minInput = document.querySelector('#min');
        this.maxInput = document.querySelector('#max');
    };
    StatsApp.prototype.watchInputsValue = function () {
        var _this = this;
        this.data1Input.addEventListener('input', function () { return _this.computeAndShowData(); });
        this.data2Input.addEventListener('input', function () { return _this.computeAndShowData(); });
        this.data3Input.addEventListener('input', function () { return _this.computeAndShowData(); });
        this.data4Input.addEventListener('input', function () { return _this.computeAndShowData(); });
    };
    StatsApp.prototype.computeAndShowData = function () {
        var data1 = +this.data1Input.value;
        var data2 = +this.data2Input.value;
        var data3 = +this.data3Input.value;
        var data4 = +this.data4Input.value;
        var sum = data1 + data2 + data3 + data4;
        var avg = sum / 4;
        var min = Math.min(data1, data2, data3, data4);
        var max = Math.max(data1, data2, data3, data4);
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
