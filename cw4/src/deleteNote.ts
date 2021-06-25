import { Note } from "./note";
import { CreateNote } from "./createNotes";

export class DeleteNote {
    note: Note;

    deleteBtns: NodeList;
    button: EventTarget;
    buttonId: number;

    localData: Array<Note>

    start() {
        this.getButtons();
        this.setListener();
        this.getLocalData();
    }


    getButtons() {
        this.deleteBtns = document.querySelectorAll('.deleteBtn');
    }


    setListener() {
        this.deleteBtns.forEach((e) => {
            e.addEventListener("click", (e) => this.getBtnId(e))
        })
    }

    getBtnId(e: Event) {
        const a = e.target as HTMLButtonElement;
        this.buttonId = parseInt(a.id);
        this.removeFromLocalStorage(this.buttonId);
    }
    getLocalData() {
        this.localData = JSON.parse(localStorage.getItem('notes'));
    }

    removeFromLocalStorage(i: number) {
        this.localData.splice(i, 1);
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