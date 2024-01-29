import {
  Component,
  ElementRef,
  HostListener,
  Inject,
  ViewChild,
} from '@angular/core';
import { DataService } from './services/data.service';
import { PopupComponent } from './components/dialogs/popup/popup.component';
import { Dialog, DialogModule, DialogRef } from '@angular/cdk/dialog';
import { PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';
import { MatMenuTrigger } from '@angular/material/menu';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'juwelierbreuch';
  public toolbarStyle: any = 'ngStyleBefore';
  firmenmail = 'mail.de';
  width: number = 0;
  public message: any = [];
  public news: any = [];

  // one: String = '';
  // two: String = '';
  // three: String = '';
  // four: String = '';
  // five: String = '';
  // fragment: any;

  constructor(
    public dataService: DataService,
    public dialog: Dialog,
    private router: Router,
    private elementRef: ElementRef,
    public snackBar: MatSnackBar,
    private route: ActivatedRoute
  ) {
    router.navigateByUrl('start');
  }
  @ViewChild('menuTriggerUeberuns') menuTriggerUeberuns!: MatMenuTrigger;
  @ViewChild('menuTriggerLeistungen') menuTriggerLeistungen!: MatMenuTrigger;

  @HostListener('window:scroll', ['$event'])
  onWindowScroll(event: any) {
    this.width = window.innerWidth;
    this.checkElementViewport();
    if (this.menuTriggerUeberuns.menuOpen) this.menuTriggerUeberuns.closeMenu();
    if (this.menuTriggerLeistungen.menuOpen)
      this.menuTriggerLeistungen.closeMenu();
  }
  @HostListener('window:load', ['$event'])
  onLoad(event: any) {
    this.width = window.innerWidth;
  }

  async ngOnInit() {
    this.message = [];
    this.news = [];
    await this.getMessage();
    this.getNews();
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action);
  }

  public async getMessage() {
    this.dataService.getMessage().subscribe((res: any) => {
      if (res.length <= 0 || res.length == undefined) return;
      res.forEach((el: any) => {
        this.message.push(el);
      });
      // this.openDialog();
      this.openSnackBar(this.message[0].title, 'OK!');
    });
  }

  public getNews() {
    this.dataService.getNews();
  }

  private checkElementViewport() {
    const myElement =
      this.elementRef.nativeElement.querySelector('#routerOutlet');

    const bounding = myElement.getBoundingClientRect();
    // console.log(bounding.top);
    if (bounding.top < 0) {
      this.toolbarStyle = 'ngStyleAfter';
    } else {
      this.toolbarStyle = 'ngStyleBefore';
    }
  }
}
