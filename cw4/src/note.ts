export class Note {
    title: string;
    noteText: string;
    color: string;
    pinned: boolean;
    date: number;



    constructor(title: string, noteText: string, color: string, pinned: boolean, date: number) {
        this.title = title;
        this.noteText = noteText;
        this.color = color;
        this.pinned = pinned;
        this.date = date;
    }
}