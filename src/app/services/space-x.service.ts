import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpaceXService {

  constructor(private http : HttpClient) { }

  getHistory() {
    return this.http.get('https://api.spacexdata.com/v3/history/');
  }

  getRockets() {
    return this.http.get('https://api.spacexdata.com/v3/rockets');
  }

  getRocket(id) {
    return this.http.get('https://api.spacexdata.com/v3/rockets/'+id);
  }

  getInfo() {
    return this.http.get('https://api.spacexdata.com/v3/info');
  }
}
