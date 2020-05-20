import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';

import { LocationService } from '../location.service';
import { HttpClient } from '@angular/common/http';
import { EventService } from '../event.service';

@Component({
  selector: 'app-quest-list',
  templateUrl: './quest-list.component.html',
  styleUrls: ['./quest-list.component.scss']
})
export class QuestListComponent implements OnInit {
  //Quest collection
  // quests : any;
  questServer = [];
  quests = [{
    id : 1, 
    title : "den første quest"
  },{
    id : 2, 
    title : "den anden quest"
  },{
    id : 3, 
    title : "den tredje quest"
  }];
  isActive : boolean = false;

  questCtrl = new FormControl();
  filteredQuests: Observable<any[]>;

  constructor( private http : HttpClient, private eventService : EventService ) {
    this.eventService.listenForUpdates().subscribe(
      (suc) =>{console.log(suc)},
      (error)=>{console.log(error)},
      ()=>{console.log("done")}
    )
    // setTimeout(() => {
    //   this.eventService.updateQuestStatus(123).subscribe(
    //     (suc)=>{console.log(suc)},  //Ændre i ui således det passer objeketet fra db.
    //     (error)=>{console.log(error)},  
    //     ()=>{console.log("finnish")}
    //   );
    // }, 2000);

  }
  
  private _filterQuest(value: string): any[] {
    const filterValue = value.toLowerCase();
    return this.quests.filter(quest => quest.title.toLowerCase().indexOf(filterValue) === 0);
  }
  /* Vores app skal have en liste af objekter som kan vises i brugergrænsefladen */


  ngOnInit(): void {
  }

}
