import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  public users:BehaviorSubject<string[]> = new BehaviorSubject(["thomas", "Jean", "David"])

  addUser(user:string): void{
    this.users.value.push(user)
  
  }

  constructor() { }
}
