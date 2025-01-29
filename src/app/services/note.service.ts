import { Injectable } from '@angular/core';

export interface Note {
  title: string;
  description: string;
}

@Injectable({
  providedIn: 'root'
})
export class NoteService {

  private notes: Note[] = [];

  constructor() { }

  setNote(note: Note) {
    console.log('before', note);
    this.notes.push(note);
    console.log('after', this.notes);
  }

  getNotes(): Note[] {
    return this.notes;
  }
}
