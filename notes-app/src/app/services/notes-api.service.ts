import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from "@angular/common/http"
import { NotesModel } from '../models/notes-model';

@Injectable({
  providedIn: 'root'
})
export class NotesApiService {

  //baseUrlDev = "http://localhost:3000"
  baseUrlProd = "https://notes-api-359211.el.r.appspot.com"
  baseUrl = this.baseUrlDev;
  constructor(private http: HttpClient) { }

  addNotes(note:NotesModel){
    const headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
    return this.http.post(this.baseUrl+"/notes",note,{headers: headers});
  }

  getAllNotes(){
    return this.http.get(this.baseUrl+"/notes");
  }

  getNotesById(noteId:any){
    return this.http.get(this.baseUrl+"/notes/"+noteId);
  }

  updateNotes(noteId:any, note:NotesModel){
    return this.http.put(this.baseUrl+"/notes/"+noteId, note)
  }

  deleteNotes(noteId:any){
    return this.http.delete(this.baseUrl+"/notes/"+noteId);
  }
}
