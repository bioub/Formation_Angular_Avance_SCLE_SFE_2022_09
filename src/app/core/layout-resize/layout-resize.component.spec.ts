import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutResizeComponent } from './layout-resize.component';

describe('LayoutResizeComponent', () => {
  let component: LayoutResizeComponent;
  let fixture: ComponentFixture<LayoutResizeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LayoutResizeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LayoutResizeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
