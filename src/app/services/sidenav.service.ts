import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SidenavService {
  private observer = new BehaviorSubject<boolean>(false);
  status = this.observer.asObservable();
  constructor() { }
  toggle() {
    this.observer.next(!this.observer.value);
  }
}
