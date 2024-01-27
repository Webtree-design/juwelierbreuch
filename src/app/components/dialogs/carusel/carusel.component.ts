import { isPlatformBrowser } from '@angular/common';
import {
  Component,
  ElementRef,
  HostListener,
  Inject,
  PLATFORM_ID,
  ViewChild,
} from '@angular/core';
import { Router } from '@angular/router';
import { NgImageSliderComponent } from 'ng-image-slider';

@Component({
  selector: 'app-carusel',
  templateUrl: './carusel.component.html',
  styleUrls: ['./carusel.component.scss'],
})
export class CaruselComponent {
  imageWidth: any = 1280 / 3; // carusel icons sind noch ein bug
  width: any;
  private isBrowser: any;
  constructor(public router: Router, @Inject(PLATFORM_ID) platformId: string) {
    this.isBrowser = isPlatformBrowser(platformId);
  }
  @ViewChild('image') slider!: NgImageSliderComponent;

  @HostListener('window:resize', ['$event'])
  onWindowSize(event: any) {
    this.width = window.innerWidth;
    if (this.width <= 1024) {
      return (this.imageWidth = this.width);
    }
    if (this.width <= 1280) {
      this.imageWidth = this.width / 3;
    }
  }
  @HostListener('window:load', ['$event'])
  onWindowLoad(event: any) {
    this.width = window.innerWidth;

    if (this.width <= 1024) {
      return (this.imageWidth = this.width);
    }
    if (this.width <= 1280) {
      this.imageWidth = this.width / 3;
    }
  }

  imageObject: any = [
    {
      image: '../../../../assets/Harley.png',
      thumbImage: '../../../../assets/Harley.png',
      alt: 'Harley',
      title: 'Harley',
      src: 'www.demoone.webtreedesign.de',
    },
    {
      image: '../../../../assets/Juwelier.png',
      thumbImage: '../../../../assets/Juwelier.png',
      alt: 'Juwelier',
      title: 'Juwelier',
      src: 'www.juwelier-breuch.de',
    },
    {
      image: '../../../../assets/Solar.png',
      thumbImage: '../../../../assets/Solar.png',
      alt: 'Solar',
      title: 'Solar',
      src: 'www.eb-energiekonzepte.de',
    },
  ];

  imageSliderClick(event: any) {
    console.log();
    if (this.isBrowser) {
      switch (event) {
        case 0:
          window.location.href = 'https://demoone.webtreedesign.de';
          break;
        case 1:
          window.location.href = 'https://juwelier-breuch.de';
          break;
        case 2:
          window.location.href = 'https://eb-energiekonzepte.de';
          break;
      }
    }
  }

  prevImageClick() {
    this.slider.prev();
  }

  nextImageClick() {
    this.slider.next();
  }
}
