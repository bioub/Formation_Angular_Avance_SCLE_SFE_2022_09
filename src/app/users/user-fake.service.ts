import { EventEmitter, Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { User } from '../shared/models/user';
import { IUserService } from './user-service.interface';

@Injectable({
  providedIn: 'root',
})
export class UserFakeService implements IUserService {

  loggedUser = {
    username: 'Toto',
    isAdmin: true,
  }

  events = new EventEmitter<string>();

  constructor() {}

  getList$(): Observable<User[]> {
    return of([
      { id: 1, name: 'Toto', email: 'toto@titi.com', phone: '060000000' },
      { id: 2, name: 'Titi', email: 'titi@tata.com', phone: '0199999999' },
    ]).pipe(delay(Math.random() * 200));
  }
  create$(user: User): Observable<User> {
    return of({
      id: 1,
      name: 'Toto',
      email: 'toto@titi.com',
      phone: '060000000',
    }).pipe(delay(Math.random() * 200));
  }
  getById$(id: number): Observable<User> {
    return of({
      id: 1,
      name: 'Toto',
      email: 'toto@titi.com',
      phone: '060000000',
    }).pipe(delay(Math.random() * 200));
  }
}
