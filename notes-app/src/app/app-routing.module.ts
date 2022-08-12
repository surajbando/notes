import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddNotesComponent } from './add-notes/add-notes.component';
import { EditNotesComponent } from './edit-notes/edit-notes.component';
import { ViewNotesComponent } from './view-notes/view-notes.component';

const routes: Routes = [
  {
    path: "add-notes",
    component: AddNotesComponent
  },{
    path: "view-notes",
    component: ViewNotesComponent
  },{
    path: "edit-notes/:id",
    component: EditNotesComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
