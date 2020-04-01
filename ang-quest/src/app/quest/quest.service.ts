import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuestService {

  private readonly _quest = new BehaviorSubject<object>({});
  readonly quest$ = this._quest.asObservable();

  get quest() : any {
    return this._quest.getValue();
  }

  set todos(val: any) {
    this._quest.next(val);
  }

}