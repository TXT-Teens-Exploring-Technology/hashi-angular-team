import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { getBootstrapListener } from '../../../node_modules/@angular/router/src/router_module';
import { Ng2CarouselamosModule } from 'ng2-carouselamos';
import { DataService } from '../data.service';
import { CaroComponent } from '../caro/caro.component';
import { Caro2Component } from '../caro2/caro2.component';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  @ViewChild('carousel') carousel: any;
  @ViewChild('carousel2') carousel1: any;
  searchText;
  public images = [
    'assets/shows/flash.jpg',
    'assets/shows/rick.jpg',
    'assets/shows/super.jpg',
  ];

  public topShows = [
    {
      id: 'Arrow',
      url: 'assets/topShows/arrow2.jpg',
    },
    /*{
      id: 'The Walking Dead',
      url: 'assets/topShows/dead.jpg',
    },*/
  ];

  slides: Array<Object> = [
    { 'src': 'assets/anime/yona1.jpg' },
    { 'src': 'assets/anime/yona1.jpg' },
    { 'src': 'assets/anime/yona1.jpg' },
  ];
  options: Object = {
    clicking: true,
    sourceProp: 'src',
    visible: 7,
    perspective: 1,
    startSlide: 0,
    border: 3,
    dir: 'ltr',
    width: 360,
    height: 270,
    space: 220,
    autoRotationSpeed: 5000,
    loop: true
  };


  public slides1: Array<Object> = [
    { 'src': 'assets/anime/yona1.jpg' },
    { 'src': 'assets/anime/yona1.jpg' },
    { 'src': 'assets/anime/yona1.jpg' },
  ];
  public options1: Object = {
    clicking: true,
    sourceProp: 'src',
    visible: 7,
    perspective: 1,
    startSlide: 0,
    border: 3,
    dir: 'ltr',
    width: 500,
    height: 300,
    space: 220,
    autoRotationSpeed: 5000,
    loop: true
  };
  constructor(private router: Router, public data: DataService) { }


  ngOnInit() {
    this.data.setFlag(false);
  }
  // Add this function
  // Import Router

  navigate(id) {
    this.router.navigate(['search', id]);
  }

  slideClicked(index) {
    // this.carousel.slideClicked(index);
    // this.carousel1.slideClicked(index);
  }

}


