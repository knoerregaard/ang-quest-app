import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { QuestListComponent } from './quest/quest-list/quest-list.component';
import { QuestDetailsComponent } from './quest/quest-details/quest-details.component';


const routes: Routes = [
  {
    path : 'quests',
    component : QuestListComponent
  },
  {
    path : 'quests/details/:id',
    component : QuestDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
