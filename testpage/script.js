const input = document.querySelector('#add-input');



function addDiv() {
    const addinput = document.querySelector('#add-input');
    let y = addinput.value;



    for (let i = 0; i < y; i++) {

        const div = document.createElement("div");
        div.id = `${i+1}`;
        div.classList.add(`input-div`);
        document.querySelector(`.input-data`).appendChild(div);

        const input = document.createElement("input");
        const removeButton = document.createElement("button");

        input.type = "Number";
        input.classList.add('data-input');
        input.id = `data-input${i}`;

        removeButton.textContent = "Usuń";
        removeButton.classList.add(`remove-button`);

        document.getElementById(`${i+1}`).appendChild(input);
        document.getElementById(`${i+1}`).appendChild(removeButton);

    }
    addinput.value = 0;
}




input.addEventListener("input", addDiv);