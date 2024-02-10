import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './comp/home/home.component';
import { TrauringeComponent } from './comp/leistungen/trauringe/trauringe.component';
import { UhrenComponent } from './comp/leistungen/uhren/uhren.component';
import { SchmuckComponent } from './comp/leistungen/schmuck/schmuck.component';
import { UhrmacherComponent } from './comp/ueberuns/uhrmacher/uhrmacher.component';
import { SchmiedComponent } from './comp/ueberuns/schmied/schmied.component';
import { FamilienbetriebComponent } from './comp/ueberuns/familienbetrieb/familienbetrieb.component';
import { KontaktComponent } from './comp/kontakt/kontakt.component';

const routes: Routes = [
  { path: '', redirectTo: '/start', pathMatch: 'full' },
  {
    path: 'start',
    component: HomeComponent,
  },
  {
    path: 'leistungen/trauringe',
    component: TrauringeComponent,
  },
  {
    path: 'leistungen/uhren',
    component: UhrenComponent,
  },
  {
    path: 'leistungen/schmuck',
    component: SchmuckComponent,
  },
  {
    path: 'ueberuns/uhrmachermeister',
    component: UhrmacherComponent,
  },
  {
    path: 'ueberuns/goldschmied',
    component: SchmiedComponent,
  },
  {
    path: 'ueberuns/familienbetrieb',
    component: FamilienbetriebComponent,
  },
  {
    path: 'kontakt',
    component: KontaktComponent,
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      initialNavigation: 'enabledBlocking',
      scrollPositionRestoration: 'enabled',
      anchorScrolling: 'enabled',
      useHash: false,
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
