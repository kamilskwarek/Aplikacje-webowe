const getInputDiv = document.querySelector(".input-div");
const inputsValues = [];

let addId = 0;
const addButton = document.querySelector(`.addButton`);
addButton.addEventListener('click', () => createInput())

const createInput = function () {
    const div = document.createElement("div");
    const input = document.createElement("input");
    const removeButton = document.createElement("button");

    div.id = "input-div" + addId;
    div.classList.add("input-div");
    input.type = "number";
    input.classList.add("data-input");
    input.id = "data-input" + addId;
    input.value = 1;
    removeButton.textContent = "Usuń";
    removeButton.classList.add("remove-button");

    document.querySelector(".input-div").appendChild(div);
    document.getElementById("input-div" + addId).appendChild(input);
    document.getElementById("input-div" + addId).appendChild(removeButton);
    addId++;
    getInputs();
}


function getInputs() {

    const inputs = document.querySelectorAll('.data-input');
    const input = document.querySelector(`#data-input${addId-1}`);
    inputsValues.push(input.value);
    console.log(input);



}
const btn = document.querySelector(".test");
btn.addEventListener('click', test);

function test() {

    console.log(inputsValues);

}