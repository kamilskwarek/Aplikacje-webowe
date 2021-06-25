import { loadLocalStorage } from "./loadLocalStorage";
import { DeleteNote } from './deleteNote';
import { EditNote } from "./editNote";

export class CreateNote {

    deleteNote = new DeleteNote;
    editNote = new EditNote;
    loadStorage = new loadLocalStorage;

    noteDiv: HTMLDivElement;
    firstRowDiv: HTMLDivElement;
    titleDiv: HTMLDivElement;
    editNoteBtn: HTMLButtonElement;
    noteTextDiv: HTMLDivElement;
    bottomRowDiv: HTMLDivElement;
    dateDiv: HTMLDivElement;
    delateBtn: HTMLButtonElement;
    noteContainer: HTMLDivElement;

    noteColor: string;
    pinnedValue: boolean;


    localStorageLenght: number;
    localNoteDataAsArray: Array<any>
    pinnedNoteContainer: HTMLDivElement;
    commonNoteContainer: HTMLDivElement;


    start() {
        this.getLocalStorageLenght();
        this.removeNotes();
        for (let i = 0; i < this.localStorageLenght; i++) {
            if (this.localNoteDataAsArray[i] == null) {
                return
            } else {
                this.createElements();
                this.addClassesToDiv();
                this.addIdToDivs(i);
                this.getNoteColor(i);
                this.getPinnedValue(i);
                this.setPinnedValue();
                this.generateDivs(i);
            }
        }
        this.loadLocalStorage();
        this.deleteBtnListeners();
        this.editBtnListeners();
    }



    getLocalStorageLenght() {
        const localNoteData = localStorage.getItem('notes');


        if (localNoteData == null) {
            return;
        } else {
            this.localNoteDataAsArray = JSON.parse(localNoteData);
            this.localStorageLenght = this.localNoteDataAsArray.length;
        }
    }

    getNoteColor(i: number) {
        this.noteColor = this.localNoteDataAsArray[i].color;
        if (this.noteColor == "Kolor") {
            this.noteDiv.style.backgroundColor = '#404041'
        } else {
            this.setNoteColor()
        }
    }
    setNoteColor() {
        this.noteDiv.style.backgroundColor = `${this.noteColor}`;

    }

    getPinnedValue(i: number) {
        this.pinnedValue = this.localNoteDataAsArray[i].pinned;
    }
    setPinnedValue() {
        if (this.pinnedValue == true) {
            this.noteContainer = document.querySelector('.pinnedNotes')
        } else {
            this.noteContainer = document.querySelector('.commonNotes')
        }
    }


    removeNotes() {
        this.pinnedNoteContainer = document.querySelector('.pinnedNotes');
        this.pinnedNoteContainer.innerHTML = '';
        this.commonNoteContainer = document.querySelector('.commonNotes');
        this.commonNoteContainer.innerHTML = '';
    }

    createElements() {
        this.noteDiv = document.createElement('div');
        this.firstRowDiv = document.createElement('div');
        this.titleDiv = document.createElement('div');
        this.editNoteBtn = document.createElement('button');
        this.noteTextDiv = document.createElement('div');
        this.bottomRowDiv = document.createElement('div');
        this.dateDiv = document.createElement('div');
        this.delateBtn = document.createElement('button');
    }

    addClassesToDiv() {

        this.noteDiv.classList.add('note')
        this.firstRowDiv.classList.add('noteRow', 'firstRow')
        this.titleDiv.classList.add('title')
        this.editNoteBtn.classList.add('editNoteBtn')
        this.noteTextDiv.classList.add('noteRow', 'note-text')
        this.bottomRowDiv.classList.add('noteRow', 'bottomRow')
        this.dateDiv.classList.add('dateDiv')
        this.delateBtn.classList.add('deleteBtn')
    }

    addIdToDivs(i: number) {
        this.noteDiv.id = `noteDiv-${i}`;
        this.firstRowDiv.id = `firstRowDiv-${i}`;
        this.titleDiv.id = `titleDiv-${i}`;
        this.editNoteBtn.id = `${i}`;
        this.noteTextDiv.id = `noteTextDiv-${i}`;
        this.bottomRowDiv.id = `bottomRowDiv-${i}`;
        this.dateDiv.id = `dateDiv-${i}`;
        this.delateBtn.id = `${i}`;
    }

    generateDivs(i: number) {

        this.noteContainer.appendChild(this.noteDiv);
        document.querySelector(`#noteDiv-${i}`).appendChild(this.firstRowDiv);
        document.querySelector(`#firstRowDiv-${i}`).appendChild(this.titleDiv);
        document.querySelector(`#firstRowDiv-${i}`).appendChild(this.editNoteBtn);
        document.querySelector(`#noteDiv-${i}`).appendChild(this.noteTextDiv);
        document.querySelector(`#noteDiv-${i}`).appendChild(this.bottomRowDiv);
        document.querySelector(`#bottomRowDiv-${i}`).appendChild(this.dateDiv);
        document.querySelector(`#bottomRowDiv-${i}`).appendChild(this.delateBtn);
    }

    loadLocalStorage() {
        this.loadStorage.start();
    }
    deleteBtnListeners() {
        this.deleteNote.start();
    }

    editBtnListeners() {
        this.editNote.start();
    }

}

