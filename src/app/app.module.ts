import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './core/home/home.component';
import { MenuComponent } from './core/menu/menu.component';
import { NotFoundComponent } from './core/not-found/not-found.component';
import { SharedModule } from './shared/shared.module';
import { TodosModule } from './todos/todos.module';
import { UsersModule } from './users/users.module';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { ClockModule } from 'my-components';
import { LayoutResizeComponent } from './core/layout-resize/layout-resize.component';
import { CountdownComponent } from './core/countdown/countdown.component';
import { StoreModule } from '@ngrx/store';
import { CounterComponent } from './core/counter/counter.component';
import { AppState, countReducer } from './store/reducers';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

@NgModule({
  declarations: [AppComponent, NotFoundComponent, HomeComponent, MenuComponent, LayoutResizeComponent, CountdownComponent, CounterComponent],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    SharedModule,
    TodosModule,
    UsersModule,
    AppRoutingModule,
    HttpClientModule,
    // ServiceWorkerModule.register('ngsw-worker.js', {
    //   enabled: environment.production,
    //   // Register the ServiceWorker as soon as the application is stable
    //   // or after 30 seconds (whichever comes first).
    //   registrationStrategy: 'registerWhenStable:30000'
    // }),
    ClockModule,
// test
    StoreModule.forRoot<AppState>({ // créé { count: initialStateCounterReducer }
      count: countReducer
    }, {}),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
