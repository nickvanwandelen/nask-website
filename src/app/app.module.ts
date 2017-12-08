import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';


import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { PageHomeComponent } from './page-home/page-home.component';
import { PageNatuurkundeHomeComponent } from './page-natuurkunde-home/page-natuurkunde-home.component';
import { PageScheikundeHomeComponent } from './page-scheikunde-home/page-scheikunde-home.component';
import {RouterModule, Routes} from '@angular/router';
import {MatSidenavModule} from "@angular/material";
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

const appRoutes: Routes = [
  {
    path: '', component: PageHomeComponent
  },
  {
    path: 'home', component: PageHomeComponent
  },
  {
    path: 'natuurkunde', component: PageNatuurkundeHomeComponent
  },
  {
    path: 'scheikunde', component: PageScheikundeHomeComponent
  }
];


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    PageHomeComponent,
    PageNatuurkundeHomeComponent,
    PageScheikundeHomeComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes, {enableTracing: true}),
    BrowserAnimationsModule,
    BrowserModule,
    MatMenuModule,
    MatToolbarModule,
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    MatSidenavModule
  ],
  providers: [],
  bootstrap: [MenuComponent]
})
export class AppModule {

}
