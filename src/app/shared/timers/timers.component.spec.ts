import { ComponentFixture, fakeAsync, TestBed, tick, waitForAsync } from '@angular/core/testing';

import { TimersComponent } from './timers.component';

describe('TimersComponent', () => {
  let component: TimersComponent;
  let fixture: ComponentFixture<TimersComponent>;
  let nativeElement: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TimersComponent ]
    })
    .compileComponents();
  });

  // Zone de Zone.js qui attend que tous les callback async
  // soit appelé et qui appelle done()
  // beforeEach(waitForAsync(() => {
  //   fixture = TestBed.createComponent(TimersComponent);
  //   component = fixture.componentInstance;
  //   nativeElement = fixture.nativeElement;
  //   fixture.detectChanges(); // ngOnInit
  // }));

  // it('should contain A, B and C', () => {
  //   fixture.detectChanges();
  //   expect(nativeElement.textContent).toContain('Prop1: A');
  //   expect(nativeElement.textContent).toContain('Prop2: B');
  //   expect(nativeElement.textContent).toContain('Prop3: C');
  // });

  // Zone de Zone.js qui va appeler automatiquement jasmine.clock().install()
  // et jasmine.clock().uninstall()
  // beforeEach(fakeAsync(() => {
  //   fixture = TestBed.createComponent(TimersComponent);
  //   component = fixture.componentInstance;
  //   nativeElement = fixture.nativeElement;
  //   fixture.detectChanges(); // ngOnInit
  //   tick(5000);
  // }));

  // it('should contain A, B and C', () => {
  //   fixture.detectChanges();
  //   expect(nativeElement.textContent).toContain('Prop1: A');
  //   expect(nativeElement.textContent).toContain('Prop2: B');
  //   expect(nativeElement.textContent).toContain('Prop3: C');
  // });

  beforeEach(() => {
    fixture = TestBed.createComponent(TimersComponent);
    component = fixture.componentInstance;
    nativeElement = fixture.nativeElement;
  });

  it('should contain A, B and C', async () => {
    fixture.detectChanges(); // ngOnInit
    await fixture.whenStable();
    fixture.detectChanges(); // relance le template et met à jour le DOM

    expect(nativeElement.textContent).toContain('Prop1: A');
    expect(nativeElement.textContent).toContain('Prop2: B');
    expect(nativeElement.textContent).toContain('Prop3: C');
  });
});
