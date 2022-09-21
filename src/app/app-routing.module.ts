import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CountdownComponent } from './core/countdown/countdown.component';
import { HomeComponent } from './core/home/home.component';
import { LayoutResizeComponent } from './core/layout-resize/layout-resize.component';
import { NotFoundComponent } from './core/not-found/not-found.component';

const routes: Routes = [{
  path: '',
  component: HomeComponent,
},
{
  path: 'layout',
  component: LayoutResizeComponent,
}, {
  path: 'countdown',
  component: CountdownComponent
}, {
  path: '**',
  component: NotFoundComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    relativeLinkResolution: 'legacy',
    initialNavigation: 'enabledBlocking'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
