import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LeistungenComponent } from './comp/leistungen/leistungen.component';
import { HomeComponent } from './comp/home/home.component';

const routes: Routes = [
  { path: '', redirectTo: '/start', pathMatch: 'full' },
  {
    path: 'start',
    component: HomeComponent,
  },
  {
    path: 'leistungen',
    component: LeistungenComponent,
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
