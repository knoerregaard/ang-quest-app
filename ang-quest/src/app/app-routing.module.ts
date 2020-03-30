import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { QuestListComponent } from './quest/quest-list/quest-list.component';


const routes: Routes = [
  {
    path : 'quests',
    component : QuestListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
