import { Component, inject } from '@angular/core';
import { Note, NoteService } from "../../services/note.service";
import { CommonModule } from "@angular/common";

@Component({
  selector: 'app-list-note',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './list-note.component.html',
  styleUrl: './list-note.component.scss'
})
export class ListNoteComponent {

  noteService = inject(NoteService);
  notes: Note[] = [];

  refresh() {
    this.notes = this.noteService.getNotes();
    console.log('notes.....', this.notes);
  }
}
