import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { getBootstrapListener } from '../../../node_modules/@angular/router/src/router_module';
import { Ng2CarouselamosModule } from 'ng2-carouselamos';
import { DataService } from '../data.service';


@Component({
  selector: 'app-caro',
  templateUrl: './caro.component.html',
  styleUrls: ['./caro.component.css']
})
export class CaroComponent implements OnInit {
  @ViewChild('carousel') carousel: any;
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
    { 'src': 'assets/anime/basilisk.jpg' },
    { 'src': 'assets/anime/drifter.jpg' },
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
  constructor( public router: Router) { }

  ngOnInit() {
  }

  navigate(id) {
    this.router.navigate(['search', id]);
  }

}
