import { Injectable } from '@angular/core';
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class DataService {

  quizFormStorage = new BehaviorSubject<any>(null);
  auth_token = new BehaviorSubject<string>("");

  constructor() { }
}
