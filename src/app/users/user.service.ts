import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { environment } from '../../environments/environment';
import { User } from '../shared/models/user';
import { IUserService } from './user-service.interface';

@Injectable({
  providedIn: 'root',
})
export class UserService implements IUserService {
  loggedUser = {
    username: 'Toto',
    isAdmin: false,
  }

  events = new EventEmitter<string>();

  constructor(private http: HttpClient) {}

  getList$(): Observable<User[]> {
    return this.http.get<User[]>(`${environment.apiBaseUrl}/users`);
  }

  create$(user: User): Observable<User> {
    return this.http.post<User>(`${environment.apiBaseUrl}/users`, user);
  }

  getById$(id: number): Observable<User> {
    return this.http.get<User>(`${environment.apiBaseUrl}/users/${id}`);
  }
}
