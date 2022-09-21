import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ClockComponent } from './clock.component';



@NgModule({
  declarations: [
    ClockComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ClockComponent
  ]
})
export class ClockModule { }
