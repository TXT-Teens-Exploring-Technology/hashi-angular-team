import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private socket;
  public myData: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);
  public data = this.myData.asObservable();

  constructor() { }

  setFlag(value) {
    this.myData.next([value]);
  }
}
