import { Component, OnInit } from '@angular/core';
import { NotesModel } from '../models/notes-model';
import { NotesApiService } from '../services/notes-api.service';

@Component({
  selector: 'app-add-notes',
  templateUrl: './add-notes.component.html',
  styleUrls: ['./add-notes.component.css']
})
export class AddNotesComponent implements OnInit {

  constructor(private notesApi: NotesApiService) { }

  ngOnInit(): void {
  }

  notesModel:NotesModel = {
    title:"",
    description:""
  };

  addNotesFn(addNotesFormData:any){
    // console.log(addNotesFormData)
    if(addNotesFormData.valid){
      let noteObj : NotesModel = {
        title:addNotesFormData.value.nTitle,
        description:addNotesFormData.value.nDesc
      }
      this.notesApi.addNotes(noteObj).subscribe({
        next:(res) =>{
          alert("Note Added Successfully!!!")
          addNotesFormData.reset();
        },
        error:(err) =>{
          alert("Couldn't Add Note!!!")
        }
      })
    }
  }

}
