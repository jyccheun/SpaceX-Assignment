import { Component, OnInit } from '@angular/core';
import { SpaceXService } from '../services/space-x.service';
import { ActivatedRoute } from '@angular/router';
import { trigger, state, style, animate, transition } from '@angular/animations'

@Component({
  selector: 'app-rocket',
  templateUrl: './rocket.component.html',
  styleUrls: ['./rocket.component.css'],
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
export class RocketComponent implements OnInit {
  private rocket : any;
  private id : string;

  pageHidden = true;

  constructor(private spaceX : SpaceXService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(
      params => {
        this.id = params['id'];
      }
    );

    // call spacex api for rocket
    this.spaceX.getRocket(this.id).subscribe((response) => {
      setTimeout(() => {
        this.rocket = response;
        this.rocket.image = this.rocket.flickr_images[0];
        this.rocket.name = this.rocket.rocket_name.toUpperCase();
        this.rocket.metricDiameter = this.rocket.diameter.meters;
        this.rocket.metricHeight = this.rocket.height.meters;
        this.rocket.metricMass = this.rocket.mass.kg;

        // format date
        var date = new Date(this.rocket.first_flight);
        var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        this.rocket.first_flight_formatted = date.getDate() + ' ' + months[date.getMonth()] + ' ' + date.getFullYear();
      }, 1000);
    });

    setTimeout(() => {
      this.pageHidden = false; // trigger animations
    }, 1500);
  }
}
