import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, mergeMap, pluck, switchMap } from 'rxjs/operators';

import { User } from '../../shared/models/user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-show',
  templateUrl: './user-show.component.html',
  styleUrls: ['./user-show.component.scss'],
})
export class UserShowComponent implements OnInit {
  public user: User;

  constructor(
    private route: ActivatedRoute,
    private userService: UserService
  ) {}

  ngOnInit() {
    // this.route.params
    //   .pipe(
    //     map(params => Number(params.id)),
    //     switchMap((id: number) => this.userService.getById$(id)),
    //   )
    //   .subscribe((user: User) => {
    //     this.user = user;
    //   });

    // Callback Hell / Pyramid of Doom
    // this.route.params.subscribe({
    //   next: (params) => {
    //     this.userService.getById$(params.id).subscribe({
    //       next: (user: User) => {
    //         this.user = user;
    //       },
    //       error: (err) => {
    //         console.log(err.message);
    //       },
    //     });
    //   },
    //   error: (err) => {
    //     console.log(err.message);
    //   },
    // });


    // this.route.params.pipe(
    //   // --------{id:'1'}------------{id:'2'}-----{id:'3'}----------
    //   map((params) => Number(params.id)),
    //   // --------1       ------------2       -----3       ----------
    //   //         -------{name:'Leanne'}|
    //   //                             --------------------------------------------{name:'Ervin'}|
    //   //                                          ---------{name: 'Clementine'}
    //   mergeMap((id) => this.userService.getById$(id)),
    //   // ---------------{name:'Leanne'}--------------------{name: 'Clementine'}--{name:'Ervin'}
    // )
    // .subscribe((user: User) => {
    //   this.user = user;
    // });

    this.route.params.pipe(
      // --------{id:'1'}------------{id:'2'}-----{id:'3'}----------
      // map((params) => Number(params.id)),
      pluck('id'),
      // --------1       ------------2       -----3       ----------
      //         -------{name:'Leanne'}|
      //                             -------------X
      //                                          ---------{name: 'Clementine'}
      switchMap((id) => this.userService.getById$(Number(id))),
      // ---------------{name:'Leanne'}--------------------{name: 'Clementine'}---------
    )
    .subscribe((user: User) => {
      this.user = user;
    });
  }
}
