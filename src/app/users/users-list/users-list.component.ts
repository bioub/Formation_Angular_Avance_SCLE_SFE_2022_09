import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { filter, startWith, switchMap } from 'rxjs/operators';

import { User } from '../../shared/models/user';
import { UserFakeService } from '../user-fake.service';
import { UserService } from '../user.service';
import { IUserService } from '../user-service.interface';

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

  public users$: Observable<User[]>;

  constructor(
    // private route: ActivatedRoute,
    // private title: Title,
    private userService: UserService,
  ) {}

  ngOnInit() {
    // this.route.data.subscribe((data) => {
    //   this.title.setTitle(data.title);
    // });

    // this.refreshList();
    this.users$ = this.userService.events
      .pipe(
        //                                       ---------------'refresh.user-list'(au moment du post)-----'send-email'-
        startWith('refresh.user-list'),
        // 'refresh.user-list'(au moment du post)---------------'refresh.user-list'(au moment du post)-----'send-email'-
        filter(e => e === 'refresh.user-list'),
        // 'refresh.user-list'(au moment du post)---------------'refresh.user-list'(au moment du post)-----            -
        switchMap(() => this.userService.getList$()),
      );
  }

  // public refreshList() {
  //   this.users$ = this.userService.getList$();
  // }

}
