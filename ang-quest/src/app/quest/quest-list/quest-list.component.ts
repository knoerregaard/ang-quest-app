import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quest-list',
  templateUrl: './quest-list.component.html',
  styleUrls: ['./quest-list.component.scss']
})
export class QuestListComponent implements OnInit {

  constructor() { }

  /* Vores app skal have en liste af objekter som kan vises i brugergrænsefladen */
  quests = [{
    id : 1, 
    title : "den første quest"
  },{
    id : 2, 
    title : "den anden quest"
  },{
    id : 3, 
    title : "den tredje quest"
  }]

  ngOnInit(): void {
  }

}
