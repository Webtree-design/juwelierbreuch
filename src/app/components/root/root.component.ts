import {
  Component,
  ElementRef,
  HostListener,
  Inject,
  ViewChild,
} from '@angular/core';
import { DataService } from 'src/app/services/data.service';

import { Dialog, DialogModule, DialogRef } from '@angular/cdk/dialog';
import { PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';

@Component({
  selector: 'app-root',
  templateUrl: './root.component.html',
  styleUrls: ['./root.component.scss'],
})
export class RootComponent {
  // @ViewChild('section4') newsSection!: ElementRef;

  // ngAfterViewInit() {
  //   console.log(this.newsSection.nativeElement);
  //   const x = this.newsSection.nativeElement;
  //   const rect = x.getBoundingClientRect();
  //   const height = rect.bottom - rect.top;

  //   console.log(height);
  // }
}
