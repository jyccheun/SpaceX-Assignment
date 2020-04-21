import { Component, OnInit } from '@angular/core';
import { SpaceXService } from '../services/space-x.service';
import { trigger, state, style, animate, transition } from '@angular/animations'

@Component({
  selector: 'app-rockets',
  templateUrl: './rockets.component.html',
  styleUrls: ['./rockets.component.css'],
  animations: [
    trigger('revealPage', [
      state('hidden', style({
        opacity: 0,
      })),
      state('visible', style({
        opacity: 1,
      })),
      transition('hidden => visible', [
        animate('1s')
      ])
    ])
  ]
})

export class RocketsComponent implements OnInit {
  private rockets : any = [];
  private id : string;

  pageHidden = true;

  constructor(private spaceX : SpaceXService) { }

  ngOnInit() {
    // call spacex api for rocket objects
    this.spaceX.getRockets().subscribe(response => {
      setTimeout(() => {
        this.rockets = response;

        for(let rocket of this.rockets) {
          rocket.image = rocket.flickr_images[0];
        }
      }, 1000);
    });

    setTimeout(() => {
      this.pageHidden = false; // trigger animations
    }, 1500);
  }

}
