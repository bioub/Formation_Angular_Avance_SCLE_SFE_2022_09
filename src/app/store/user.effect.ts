import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { filter, map, mergeMap, tap } from 'rxjs/operators';
import { UserService } from '../users/user.service';
import { usersLoadList, usersLoadListSuccess } from './actions';

@Injectable()
export class UserEffects {
  usersLoadList$ = createEffect(() => {
    return this.actions$.pipe(
      tap((action) => console.log(action)),
      // ofType(usersLoadList),
      filter((action) => action.type === '[Users] Load List'),
      mergeMap(() =>
        this.userService.getList$().pipe(
          map((users) => usersLoadListSuccess({ users }))
          //  catchError(() => of({ type: '[Movies API] Movies Loaded Error' }))
        )
      )
    );
  });

  constructor(private actions$: Actions, private userService: UserService) {}
}
