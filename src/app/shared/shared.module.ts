import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TabsComponent } from './tabs/tabs.component';
import { TabComponent } from './tabs/tab/tab.component';
import { IncreaseOnClickDirective } from './increase-on-click.directive';
import { IsAdminDirective } from './is-admin.directive';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
  ],
  declarations: [
    TabsComponent,
    TabComponent,
    IncreaseOnClickDirective,
    IsAdminDirective
  ],
  exports: [
    CommonModule,
    FormsModule,
    TabsComponent,
    TabComponent,
    IncreaseOnClickDirective,
    IsAdminDirective
  ]
})
export class SharedModule { }
