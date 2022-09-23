import { HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { EventEmitter } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';
import { UserService } from '../user.service';

import { UsersListComponent } from './users-list.component';

describe('UsersListComponent', () => {
  let component: UsersListComponent;
  let fixture: ComponentFixture<UsersListComponent>;
  let nativeElement: HTMLElement;

  // Option 1 : attendre que la requête se termine
  // beforeEach(async () => {
  //   await TestBed.configureTestingModule({
  //     declarations: [UsersListComponent],
  //     imports: [RouterTestingModule, HttpClientModule],
  //   }).compileComponents();
  //   fixture = TestBed.createComponent(UsersListComponent);
  //   component = fixture.componentInstance;
  //   nativeElement = fixture.nativeElement
  //   fixture.detectChanges();
  // });

  // it('contains Leanne Graham', async () => {
  //   await fixture.whenStable();
  //   fixture.detectChanges();
  //   expect(nativeElement.textContent).toContain('Leanne Graham');
  // });

  // Option 2 : Fake
  // beforeEach(async () => {
  //   await TestBed.configureTestingModule({
  //     declarations: [UsersListComponent],
  //     imports: [RouterTestingModule],
  //     providers: [
  //       {
  //         provide: UserService,
  //         useValue: {
  //           events: new EventEmitter<string>(),
  //           getList$() {
  //             return of([{id: 1, name: 'Jean Dupont'}, {id: 2, name: 'Eric Martin'}]);
  //           }
  //         }
  //       }
  //     ]
  //   }).compileComponents();
  //   fixture = TestBed.createComponent(UsersListComponent);
  //   component = fixture.componentInstance;
  //   nativeElement = fixture.nativeElement
  //   fixture.detectChanges();
  // });

  // it('contains Jean Dupont', () => {
  //   fixture.detectChanges();
  //   expect(nativeElement.textContent).toContain('Jean Dupont');
  // });

  // Option 3 : SpyOn
  // beforeEach(async () => {
  //   await TestBed.configureTestingModule({
  //     declarations: [UsersListComponent],
  //     imports: [RouterTestingModule, HttpClientModule],
  //   }).compileComponents();
  //   fixture = TestBed.createComponent(UsersListComponent);
  //   component = fixture.componentInstance;
  //   nativeElement = fixture.nativeElement

  //   const userService = TestBed.inject(UserService);

  //   spyOn(userService, 'getList$').and.returnValue(of([{id: 1, name: 'Sophie Marceau'}, {id: 2, name: 'Toto Titi'}]))

  //   fixture.detectChanges();
  // });

  // it('contains Sophie Marceau', () => {
  //   fixture.detectChanges();
  //   expect(nativeElement.textContent).toContain('Sophie Marceau');
  // });

  // Option 4 : HttpClientTestingModule
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UsersListComponent],
      imports: [RouterTestingModule, HttpClientTestingModule],
    }).compileComponents();

    fixture = TestBed.createComponent(UsersListComponent);
    component = fixture.componentInstance;
    nativeElement = fixture.nativeElement

    fixture.detectChanges(); // ngOnInit
  });

  it('contains Steve Jobs', () => {
    const controller = TestBed.inject(HttpTestingController);

    controller.expectOne('https://jsonplaceholder.typicode.com/users').flush([{id: 1, name: 'Steve Jobs'}, {id: 2, name: 'Bill Gates'}])

    // comme j'ai pas corrigé l'exercice sur Subject : 2 requêtes
    // controller.match('https://jsonplaceholder.typicode.com/users')[0].flush([{id: 1, name: 'Steve Jobs'}, {id: 2, name: 'Bill Gates'}])

    fixture.detectChanges();
    expect(nativeElement.textContent).toContain('Steve Jobs');
  });
});
