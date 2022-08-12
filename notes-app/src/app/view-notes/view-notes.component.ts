import { Component, OnInit } from '@angular/core';
import { NotesModel } from '../models/notes-model';
import { NotesApiService } from '../services/notes-api.service';

@Component({
  selector: 'app-view-notes',
  templateUrl: './view-notes.component.html',
  styleUrls: ['./view-notes.component.css']
})
export class ViewNotesComponent implements OnInit {

  constructor(private notesApi: NotesApiService) { }

  ngOnInit(): void {
    this.fetchAllNotes();
  }

  allNotes:any;
  dataSource: any;

  displayedColumns: string[] = ['title', 'description', 'edit', 'delete'];

  fetchAllNotes(){
    this.notesApi.getAllNotes().subscribe({
      next:(res) => {
        console.log(res);
        this.allNotes = res;
        this.dataSource = res
      },
      error:(err) => {
        alert("Couldn't Fetch Notes!!!")
      }
    })
  }

  deleteNote(noteId:any){
    this.notesApi.deleteNotes(noteId).subscribe({
      next:(res) => {
        alert("Note Deleted Successfuly!!!")
        this.fetchAllNotes();

      },
      error:(err) => {
        alert("Couldn't Fetch Notes!!!")
      }
    })
  }

}
