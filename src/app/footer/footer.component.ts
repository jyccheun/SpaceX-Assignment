import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  @Output() dataEmitter: EventEmitter<any> = new EventEmitter<any>();

  private isPageAbout : boolean = false;
  private pageLoaded : boolean = false;

  constructor(private router: Router) { }

  ngOnInit() {
    this.router.events.subscribe(
      event => {
        this.pageLoaded = false;
        if (event instanceof NavigationEnd) {
          // hide footer in about page
          this.isPageAbout = event.url == '/about' ? true : false;

           // set timer such that footer is hidden while page is loading 
          setTimeout(() => {
            this.pageLoaded = true;
          }, 1200);
        }
      }
    );

    setTimeout(() => {
      this.emitData(); // emit pointless data to fulfill assignment requirement
    }, 500);
  }

  emitData() {
    this.dataEmitter.emit('This came from the footer!');
  }
}
