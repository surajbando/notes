import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NotesModel } from '../models/notes-model';
import { NotesApiService } from '../services/notes-api.service';

@Component({
  selector: 'app-edit-notes',
  templateUrl: './edit-notes.component.html',
  styleUrls: ['./edit-notes.component.css']
})
export class EditNotesComponent implements OnInit {


  notesModel:NotesModel = {
    title:"",
    description:""
  };

  constructor(private notesApi: NotesApiService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    // console.log(this.route.snapshot.params);
    let params = this.route.snapshot.params;
    this.notesApi.getNotesById(params['id']).subscribe({
      next:(res:any)=>{
        this.notesModel.title = res["title"];
        this.notesModel.description = res["description"];
      },
      error:(err:any)=>{
        alert("Couldn't Fetch Notes Data!!!")
      }
    });
  }

  editNotesFn(editNotesForm:any){
    let params = this.route.snapshot.params;
    this.notesApi.updateNotes(params['id'], this.notesModel).subscribe({
      next:(res:any)=>{
        alert("Note Updated Successfully!!!");
      },
      error:(err:any)=>{
        alert("Couldn't Fetch Notes Data!!!");
      }
    });
  }
}
