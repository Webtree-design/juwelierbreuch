import { Component, ElementRef, ViewChild } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss'],
})
export class NewsComponent {
  public news = this.dataService.news;
  constructor(public dataService: DataService) {}

  ngOnInit() {}

  public formattedDateString(dateString: any) {
    const date = new Date(dateString);

    const options: Intl.DateTimeFormatOptions = {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
    };

    const formattedDate = date.toLocaleDateString('de-DE', options);
    return formattedDate;
  }

  
}
