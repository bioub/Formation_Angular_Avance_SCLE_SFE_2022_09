import { InjectionToken } from "@angular/core";
import { Observable } from "rxjs";
import { User } from "../shared/models/user";

export const IUserService = new InjectionToken<IUserService>('IUserService');

export interface IUserService {

  loggedUser: { username: string, isAdmin: boolean };

  events: Observable<string>;
  getList$(): Observable<User[]>;
  create$(user: User): Observable<User>;
  getById$(id: number): Observable<User>;
}
