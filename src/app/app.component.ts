import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  text;
  public flag;

  constructor(public router: Router, public data: DataService) {
    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
        return;
      }
      window.scrollTo(0, 0);
    });


  }

  ngOnInit() {
    this.data.data.subscribe((res) => {
      setTimeout(() => {
        this.flag = res[0];
      }, 0);

    });
  }
  test() {
    this.router.navigate(['search', this.text]);
  }
}


