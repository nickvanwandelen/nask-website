import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';

import {AngularFireModule} from 'angularfire2';
import {AngularFireDatabaseModule} from 'angularfire2/database';
import {AngularFireAuthModule} from 'angularfire2/auth';
import {environment} from '../environments/environment';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { PageHomeComponent } from './page-home/page-home.component';
import { PageNatuurkundeHomeComponent } from './page-natuurkunde-home/page-natuurkunde-home.component';
import { PageScheikundeHomeComponent } from './page-scheikunde-home/page-scheikunde-home.component';
import {RouterModule, Routes} from '@angular/router';
import {MatSidenavModule, MatTableModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { SubjectNatuurkundeHomeComponent } from './subject-natuurkunde-home/subject-natuurkunde-home.component';
import { SubjectNatuurkundeKrachtbewegingComponent } from './subject-natuurkunde-krachtbeweging/subject-natuurkunde-krachtbeweging.component';
import { PagePagenotfoundComponent } from './page-pagenotfound/page-pagenotfound.component';
import {Subject} from 'rxjs/Subject';
import { SubjectNatuurkundeLichtgeluidComponent } from './subject-natuurkunde-lichtgeluid/subject-natuurkunde-lichtgeluid.component';
import { SubjectScheikundeHomeComponent } from './subject-scheikunde-home/subject-scheikunde-home.component';
import { SubjectScheikundeScheidingsmethodesComponent } from './subject-scheikunde-scheidingsmethodes/subject-scheikunde-scheidingsmethodes.component';
import { SubjectScheikundeKoolstofchemieComponent } from './subject-scheikunde-koolstofchemie/subject-scheikunde-koolstofchemie.component';
import { PageToetsenHomeComponent } from './page-toetsen-home/page-toetsen-home.component';


const appRoutes: Routes = [
  {
    path: '', component: PageHomeComponent
  },
  {
    path: 'home', component: PageHomeComponent
  },
  {
    path: 'toetsen', component: PageToetsenHomeComponent
  },
  {
    path: 'natuurkunde',
    component: PageNatuurkundeHomeComponent,
    children: [
      {
        path: '',
        component: SubjectNatuurkundeHomeComponent,
        outlet: 'natuurkunde_outlet'
      },
      {
        path: 'home',
        component: SubjectNatuurkundeHomeComponent,
        outlet: 'natuurkunde_outlet'
      },
      {
        path: 'krachtbeweging',
        component: SubjectNatuurkundeKrachtbewegingComponent,
        outlet: 'natuurkunde_outlet'
      },
      {
        path: 'lichtgeluid',
        component: SubjectNatuurkundeLichtgeluidComponent,
        outlet: 'natuurkunde_outlet'
      }
    ]
  },
  {
    path: 'scheikunde',
    component: PageScheikundeHomeComponent,
    children: [
      {
        path: '',
        component: SubjectScheikundeHomeComponent,
        outlet: 'scheikunde_outlet'
      },
      {
        path: 'home',
        component: SubjectScheikundeHomeComponent,
        outlet: 'scheikunde_outlet'
      },
      {
        path: 'scheidingsmethodes',
        component: SubjectScheikundeScheidingsmethodesComponent,
        outlet: 'scheikunde_outlet'
      },
      {
        path: 'koolstofchemie',
        component: SubjectScheikundeKoolstofchemieComponent,
        outlet: 'scheikunde_outlet'
      },
    ]
  },
  /*{
    path: '**', component: PagePagenotfoundComponent
  }*/
];


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    PageHomeComponent,
    PageNatuurkundeHomeComponent,
    PageScheikundeHomeComponent,
    SubjectNatuurkundeHomeComponent,
    SubjectNatuurkundeKrachtbewegingComponent,
    PagePagenotfoundComponent,
    SubjectNatuurkundeLichtgeluidComponent,
    SubjectScheikundeHomeComponent,
    SubjectScheikundeScheidingsmethodesComponent,
    SubjectScheikundeKoolstofchemieComponent,
    PageToetsenHomeComponent,
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
    MatSidenavModule,
    MatTableModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  providers: [],
  bootstrap: [MenuComponent]
})
export class AppModule {

}
