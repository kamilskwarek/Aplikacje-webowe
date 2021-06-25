import { Note } from "./note";

export class SaveToLocalStorage {

    titleInput: HTMLInputElement;
    noteTextInput: HTMLTextAreaElement;
    colorInput: HTMLSelectElement;
    pinnedInput: HTMLInputElement;
    date: number;
    addNoteBtn: HTMLButtonElement;

    titleInputValue: string;
    noteTextInputValue: string;
    colorInputValue: string;
    pinnedInputValue: boolean;

    note: Note;


    removeNote: HTMLButtonElement;

    btnListener() {
        this.addNoteBtn = document.querySelector('.add-note');
        this.addNoteBtn.addEventListener("click", () => this.start())
    }

    start() {
        this.getElements();
        this.getElementsValue();
        this.addValueToNote();
    }

    getElements() {
        this.titleInput = document.querySelector('.title-input');
        this.noteTextInput = document.querySelector('.notetext-input');
        this.colorInput = document.querySelector('.color-input');
        this.pinnedInput = document.querySelector('.pinCheckbox');

    }

    getElementsValue() {

        this.titleInputValue = this.titleInput.value;
        this.noteTextInputValue = this.noteTextInput.value;
        this.colorInputValue = this.colorInput.value;
        this.pinnedInputValue = this.pinnedInput.checked;
        this.date = Date.now();
    }

    addValueToNote() {
        this.note = new Note(this.titleInputValue, this.noteTextInputValue, this.colorInputValue, this.pinnedInputValue, this.date)

        console.log(this.note)

        this.saveData(this.note)
    }

    saveData(data: any) {
        let index: number;
        const currentData = this.getData();
        if (!currentData) {
            index = 0;

        } else if (currentData) {
            index = currentData.length;
        }

        currentData[index] = data;
        localStorage.setItem('notes', JSON.stringify(currentData));

    }
    getData() {

        const data = localStorage.getItem('notes');
        if (data) {
            return JSON.parse(data);
        }

        return [];

    }


}