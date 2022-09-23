import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { filter, share, shareReplay, startWith, switchMap, tap } from 'rxjs/operators';

import { User } from '../../shared/models/user';
import { UserFakeService } from '../user-fake.service';
import { UserService } from '../user.service';
import { IUserService } from '../user-service.interface';
import { Store } from '@ngrx/store';
import { usersLoadList, usersLoadListSuccess } from 'src/app/store/actions';
import { usersSelector } from 'src/app/store/selectors';
import { UsersState } from 'src/app/store/reducers';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss'],
  // providers: [
  //   {
  //     provide: IUserService,
  //     useExisting: UserFakeService
  //   }
  // ]
})
export class UsersListComponent implements OnInit {

  public usersState$: Observable<UsersState>;

  constructor(
    // private route: ActivatedRoute,
    // private title: Title,
    private userService: UserService,
    private store: Store,
  ) {}

  ngOnInit() {
    // this.route.data.subscribe((data) => {
    //   this.title.setTitle(data.title);
    // });
    this.usersState$ = this.store.select(usersSelector)

    // this.refreshList();
    // this.userService.events
    //   .pipe(
    //     //                                       ---------------'refresh.user-list'(au moment du post)-----'send-email'-
    //     startWith('refresh.user-list'),
    //     // 'refresh.user-list'(au moment du post)---------------'refresh.user-list'(au moment du post)-----'send-email'-
    //     filter(e => e === 'refresh.user-list'),
    //     tap(() => this.store.dispatch(usersLoadList())),
    //     // 'refresh.user-list'(au moment du post)---------------'refresh.user-list'(au moment du post)-----            -
    //     switchMap(() => this.userService.getList$()),
    //     tap((users) => this.store.dispatch(usersLoadListSuccess({ users }))),
    //     share(), // créé et retourne le subjet qui subscribe à l'observable
    //   ).subscribe();
    this.store.dispatch(usersLoadList());
  }

  // public refreshList() {
  //   this.users$ = this.userService.getList$();
  // }

}
