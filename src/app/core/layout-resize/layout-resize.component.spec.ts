import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IncreaseOnClickDirective } from 'src/app/shared/increase-on-click.directive';

import { LayoutResizeComponent } from './layout-resize.component';

describe('LayoutResizeComponent', () => {
  let component: LayoutResizeComponent;
  let fixture: ComponentFixture<LayoutResizeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LayoutResizeComponent, IncreaseOnClickDirective ]
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
