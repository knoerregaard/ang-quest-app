import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { of, from, fromEvent } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class EventService {

  private baseurl : string = "http://localhost:3000/countdown";

  constructor(private http : HttpClient) { 
  }

  getSomething() : Observable<any> {
    // Definer eventsource
    const source = new EventSource(this.baseurl);

    // Definer Observable
    let stream = fromEvent(source, "questStart")

    //Retur Observable
    return stream;
  }

  updateQuestStatus(id : number) : Observable<any>{
    return this.http.get(`http://localhost:3000/updateQuestStatus?id=${id}`);
  }
  listenForUpdates() : Observable<any> {

    const source = new EventSource("http://localhost:3000/listenForUpdates");

    // Definer Observable
    let stream = fromEvent(source, "message");

    //Retur Observable
    return stream;

  }
}
