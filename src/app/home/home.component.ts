import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { getBootstrapListener } from '../../../node_modules/@angular/router/src/router_module';
import { Ng2CarouselamosModule } from 'ng2-carouselamos';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
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
    {
      id: 'Yona',
      url:  'assets/anime/yona1.jpg',
    },
    {
      id: 'Drifter',
      url: 'assets/anime/drifter.jpg',
    },
    {
      id: 'Gotham',
      url: 'assets/topShows/gotham.jpg',
    },
    {
      id: 'Mob Psycho',
      url: 'assets/anime/mob.jpg',
    },
    {
      id: 'Basilisk',
      url:  'assets/anime/basilisk.jpg',
    },
    {
      id: 'Walking Dead',
      url:  'assets/topShows/dead.jpg',
    },
    {
      id: 'Attack on Titan',
      url:  'assets/anime/aot.jpg',
    },
    {
      id: 'Black Clover',
      url:  'assets/anime/blackclover.jpg',
    },
  ];
  constructor(private router: Router) { }


  ngOnInit() {
  }
// Add this function
// Import Router

  navigate(id) {
    this.router.navigate(['search', id]);
  }

}


