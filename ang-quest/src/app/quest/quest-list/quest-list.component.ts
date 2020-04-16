import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';

import { LocationService } from '../location.service';
import { HttpClient } from '@angular/common/http';

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

  questCtrl = new FormControl();
  filteredQuests: Observable<any[]>;

  constructor( private http : HttpClient ) {

    this.http.get('http://localhost:3000/quests')
      .subscribe(
        (suc : Array<Object>)=>{
          this.filteredQuests = this.questCtrl.valueChanges
          .pipe(
            startWith(''),
            map(quest => quest ? this._filterQuest(quest) : suc.slice())
          );
        }
      )
  }
  private _filterQuest(value: string): any[] {
    const filterValue = value.toLowerCase();
    return this.quests.filter(quest => quest.title.toLowerCase().indexOf(filterValue) === 0);
  }
  /* Vores app skal have en liste af objekter som kan vises i brugergrænsefladen */


  ngOnInit(): void {
  }

}
