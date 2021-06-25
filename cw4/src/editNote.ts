import { Note } from "./note";
import { CreateNote } from "./createNotes";


export class EditNote {
    note: Note;

    titleInput: HTMLInputElement;
    textInput: HTMLInputElement;
    colorInput: HTMLSelectElement;
    pinnedInput: HTMLInputElement;
    date: number;


    titleInputValue: string;
    noteTextInputValue: string;
    colorInputValue: string;
    pinnedInputValue: boolean;

    localData: Array<Note>

    editBtns: NodeList;
    buttonId: number;

    titleDiv: HTMLDListElement;
    noteTextDiv: HTMLDListElement;


    addNoteBtn: HTMLButtonElement;


    start() {
        this.getButtons();
        this.setListener();
        this.getLocalData();
    }


    getButtons() {
        this.editBtns = document.querySelectorAll('.editNoteBtn');

    }

    setListener() {
        this.editBtns.forEach((e) => {
            e.addEventListener("click", (e) => this.getBtnId(e))
        })
    }

    getBtnId(e: Event) {
        const a = e.target as HTMLButtonElement;
        this.buttonId = parseInt(a.id);
        this.getElements(this.buttonId);
        this.transferValues(this.buttonId);
        this.changeButton();
    }

    getElements(i: number) {
        this.titleDiv = document.querySelector(`#titleDiv-${i}`);
        this.noteTextDiv = document.querySelector(`#noteTextDiv-${i}`);
        this.titleInput = document.querySelector('.title-input');
        this.textInput = document.querySelector('.notetext-input');
        this.colorInput = document.querySelector('.color-input');
        this.pinnedInput = document.querySelector('.pinCheckbox');
    }
    transferValues(i: number) {
        this.titleInput.value = this.localData[i].title;
        this.textInput.value = this.localData[i].noteText;
        this.colorInput.value = this.localData[i].color;
        this.pinnedInput.checked = this.localData[i].pinned;
    }

    changeButton() {
        this.addNoteBtn = document.querySelector('.add-note');
        this.addNoteBtn.replaceWith(this.addNoteBtn.cloneNode(true))
        this.addNoteBtn = document.querySelector('.add-note');
        this.addNoteBtn.textContent = "Modyfikuj";
        this.modifyBtnListener();
    }

    modifyBtnListener() {
        this.addNoteBtn.addEventListener("click", () => this.modifyValues())
    }


    modifyValues() {
        this.getElementsValue();
        this.addValueToNote();
        this.editLocalStorage(this.buttonId);
        this.saveModifiedData();
        this.refreshNotes();
    }

    getLocalData() {
        this.localData = JSON.parse(localStorage.getItem('notes'));
    }

    getElementsValue() {
        this.titleInputValue = this.titleInput.value;
        this.noteTextInputValue = this.textInput.value;
        this.colorInputValue = this.colorInput.value;
        this.pinnedInputValue = this.pinnedInput.checked;
        this.date = Date.now();
    }

    addValueToNote() {
        this.note = new Note(this.titleInputValue, this.noteTextInputValue, this.colorInputValue, this.pinnedInputValue, this.date)
    }

    editLocalStorage(i: number) {
        this.localData.splice(i, 1, this.note);
        this.saveModifiedData();
    }

    saveModifiedData() {
        localStorage.setItem('notes', JSON.stringify(this.localData))
        this.refreshNotes()
    }

    refreshNotes() {
        const create = new CreateNote;
        create.start();
    }

}