import { Component, OnInit } from '@angular/core';
import { SpaceXService } from '../services/space-x.service';
import { trigger, state, style, animate, transition } from '@angular/animations'

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
  animations: [
    trigger('revealPage', [
      state('hidden', style({
        opacity: 0,
      })),
      state('visible', style({
        opacity: 1,
      })),
      transition('hidden => visible', [
        animate('1.5s')
      ])
    ])
  ]
})

export class AboutComponent implements OnInit {
  private info : any = null;

  pageHidden = true;

  image_musk = 'https://content.fortune.com/wp-content/uploads/2014/12/rtr49m2y.jpg';

  constructor(private spaceX : SpaceXService) { }

  ngOnInit() {
    this.spaceX.getInfo().subscribe((response) => {
      setTimeout(() => {
        this.info = response;

        // format all necesarry raw data
        let formatter = new Intl.NumberFormat('en-US', {
          style: 'currency',
          currency: 'USD',
          minimumFractionDigits: 2
        });
        this.info.valuationFormatted = formatter.format(this.info.valuation);

        this.info.summary = this.info.summary.substring(6);

        this.info.headquartersFull = this.info.headquarters.address+'<br>'
                                      + this.info.headquarters.city+', '
                                      + this.info.headquarters.state;
        console.log(response);
      }, 1000);
    });

    setTimeout(() => {
      this.pageHidden = false; // trigger animations
    }, 1500);
  }
}
