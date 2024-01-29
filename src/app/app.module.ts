import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatDividerModule } from '@angular/material/divider';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { DialogModule } from '@angular/cdk/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatStepperModule } from '@angular/material/stepper';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatExpansionModule } from '@angular/material/expansion';

// slider
// import { NgImageSliderModule } from 'ng-image-slider';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { StartComponent } from './components/sections/start/start.component';
import { UeberunsComponent } from './components/sections/ueberuns/ueberuns.component';
import { PopupComponent } from './components/dialogs/popup/popup.component';
import { NewsComponent } from './components/sections/news/news.component';
import { KontaktComponent } from './components/sections/kontakt/kontakt.component';
import { ExpanderComponent } from './components/sections/expander/expander.component';
import { CaruselComponent } from './components/dialogs/carusel/carusel.component';
import { InformationComponent } from './components/sections/information/information.component';
import { ImpressumComponent } from './components/impressum/impressum.component';
import { DatenschutzComponent } from './components/datenschutz/datenschutz.component';
import { RootComponent } from './components/root/root.component';
import { UeberunspageComponent } from './components/ueberunspage/ueberunspage.component';
import { LeistungenpageComponent } from './components/leistungenpage/leistungenpage.component';

@NgModule({
  declarations: [
    AppComponent,
    StartComponent,
    UeberunsComponent,
    PopupComponent,
    NewsComponent,
    KontaktComponent,
    ExpanderComponent,
    CaruselComponent,
    InformationComponent,
    ImpressumComponent,
    DatenschutzComponent,
    RootComponent,
    UeberunspageComponent,
    LeistungenpageComponent,
  ],
  imports: [
    BrowserModule, //.withServerTransition({ appId: 'serverApp' }),
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatDividerModule,
    MatToolbarModule,
    MatMenuModule,
    MatButtonModule,
    MatIconModule,
    DialogModule,
    MatCheckboxModule,
    MatInputModule,
    MatFormFieldModule,
    MatStepperModule,
    FormsModule,
    ReactiveFormsModule,
    MatSnackBarModule,
    MatExpansionModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
