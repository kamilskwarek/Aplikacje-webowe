export class loadLocalStorage {

    titleValue: string;
    noteTextValue: string;
    dateValue: number;


    titleDiv: HTMLDivElement;
    noteTextDiv: HTMLDivElement;
    dateDiv: HTMLDivElement;

    editBtn: HTMLButtonElement;
    deleteBtn: HTMLButtonElement;


    localNoteDataAsArray: Array<any>;
    localStorageLenght: number;

    start() {
        this.getLocalStorageLenght()
        for (let i = 0; i < this.localStorageLenght; i++) {
            if (this.localNoteDataAsArray[i] == null) {
                return
            } else {
                this.selectDataPalces(i);
                this.loadData(i);
                this.pasteData();
            }

        }
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



    selectDataPalces(i: number) {
        this.titleDiv = document.querySelector(`#titleDiv-${i}`);
        this.noteTextDiv = document.querySelector(`#noteTextDiv-${i}`);
        this.dateDiv = document.querySelector(`#dateDiv-${i}`);
        this.editBtn = document.querySelector(`div.noteRow.firstRow [id='${i}']`);
        this.deleteBtn = document.querySelector(`div.noteRow.bottomRow [id='${i}']`);
    }

    loadData(i: number) {

        this.titleValue = this.localNoteDataAsArray[i].title;
        this.noteTextValue = this.localNoteDataAsArray[i].noteText;
        this.dateValue = this.localNoteDataAsArray[i].date;
    }

    pasteData() {
        this.titleDiv.innerHTML = this.titleValue;
        this.noteTextDiv.innerHTML = this.noteTextValue;
        this.dateDiv.innerHTML = new Date(this.dateValue).toLocaleString();
        this.editBtn.innerHTML = 'Edytuj';
        this.deleteBtn.innerHTML = 'Usuń';
    }

}