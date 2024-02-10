import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
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

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HomeComponent } from './comp/home/home.component';
import { S1Component } from './comp/home/sections/s1/s1.component';
import { S2Component } from './comp/home/sections/s2/s2.component';
import { S3Component } from './comp/home/sections/s3/s3.component';

// slider
import { register } from 'swiper/element/bundle';
import { TrauringeComponent } from './comp/leistungen/trauringe/trauringe.component';
import { UhrenComponent } from './comp/leistungen/uhren/uhren.component';
import { SchmuckComponent } from './comp/leistungen/schmuck/schmuck.component';
import { UhrmacherComponent } from './comp/ueberuns/uhrmacher/uhrmacher.component';
import { SchmiedComponent } from './comp/ueberuns/schmied/schmied.component';
import { FamilienbetriebComponent } from './comp/ueberuns/familienbetrieb/familienbetrieb.component';
register();

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    S1Component,
    S2Component,
    S3Component,
    TrauringeComponent,
    UhrenComponent,
    SchmuckComponent,
    UhrmacherComponent,
    SchmiedComponent,
    FamilienbetriebComponent,
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
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
