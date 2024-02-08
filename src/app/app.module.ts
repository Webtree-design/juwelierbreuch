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

import { HomeComponent } from './comp/home/home.component';
import { LeistungenComponent } from './comp/leistungen/leistungen.component';
import { S1Component } from './comp/home/sections/s1/s1.component';
import { S2Component } from './comp/home/sections/s2/s2.component';
import { S3Component } from './comp/home/sections/s3/s3.component';
import { L1Component } from './comp/leistungen/sections/l1/l1.component';
import { L2Component } from './comp/leistungen/sections/l2/l2.component';
import { L3Component } from './comp/leistungen/sections/l3/l3.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LeistungenComponent,
    S1Component,
    S2Component,
    S3Component,
    L1Component,
    L2Component,
    L3Component,
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
