import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-quest-details',
  templateUrl: './quest-details.component.html',
  styleUrls: ['./quest-details.component.scss']
})
export class QuestDetailsComponent implements OnInit {

  quest = {
    id : 1,
    title : "den første quest",
    description : "...",
    date : "",
    locations : [{
      title : "",
      description :"",
      lat : "",
      long : "",
      question : "",
      answers : [{}]
    }]
  }

  constructor(
    private route: ActivatedRoute,
  ) {
  }

  ngOnInit(): void {
    let id = this.route.snapshot.paramMap.get('id'); //alternativ Observables
    console.log(id)
  }
}
