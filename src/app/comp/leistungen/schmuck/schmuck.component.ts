import { isPlatformBrowser } from '@angular/common';
import {
  Component,
  ElementRef,
  Inject,
  PLATFORM_ID,
  ViewChild,
} from '@angular/core';
@Component({
  selector: 'app-schmuck',
  templateUrl: './schmuck.component.html',
  styleUrls: ['./schmuck.component.scss'],
})
export class SchmuckComponent {
  panelOpenState1 = false;
  panelOpenState2 = false;
  panelOpenState3 = false;
  panelOpenState4 = false;
  private isBrowser: any;
  constructor(
    @Inject(PLATFORM_ID) platformId: string,
    private elementRef: ElementRef
  ) {
    this.isBrowser = isPlatformBrowser(platformId);
  }

  @ViewChild('sC1') sC1!: ElementRef;

  ngAfterViewInit() {
    this.initSwiper();
  }
  initSwiper() {
    if (this.isBrowser) {
      const swiperEl = this.sC1.nativeElement;
      if (swiperEl) {
        Object.assign(swiperEl, {
          slidesPerView: 1,
          spaceBetween: 10,
          pagination: {
            clickable: true,
          },
          breakpoints: {
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 4,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 5,
              spaceBetween: 50,
            },
          },
        });
        swiperEl.initialize();
      }
    }
  }
}
