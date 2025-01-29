import { Component, inject } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { NoteService } from "../../services/note.service";

@Component({
  selector: 'app-add-note',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-note.component.html',
  styleUrl: './add-note.component.scss'
})
export class AddNoteComponent {
  title: string = '';
  description: string = '';

  noteService = inject(NoteService);

  saveNote() {
    const note = {
      title: this.title,
      description: this.description
    }
    this.noteService.setNote(note);
  }
}
