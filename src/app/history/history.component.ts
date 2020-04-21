import { Component, OnInit } from '@angular/core';
import { SpaceXService } from '../services/space-x.service';
import { trigger, state, style, animate, transition } from '@angular/animations'

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css'],
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
export class HistoryComponent implements OnInit {
  private histories : any = [];

  pageHidden = true;

  constructor(private spaceX : SpaceXService) { }

  ngOnInit() {
    // call spacex api for history objects
    this.spaceX.getHistory().subscribe((response) => {
      setTimeout(() => {
        this.histories = response;
      }, 1000);
    });

    setTimeout(() => {
      this.pageHidden = false; // trigger animations
    }, 1500);
  }

}
