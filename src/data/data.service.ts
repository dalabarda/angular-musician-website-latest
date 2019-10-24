import { Injectable } from '@angular/core';
import { LatLngExpression} from 'leaflet';
import { Observable, of } from 'rxjs';
import { IEvent, IMenu, IPlatform } from './data';
import { EVENTS, MENUS, PLATFORMS } from './mock-data';
 

export class Marker {
  id: number;
  name: String;
  description: String;
  position: LatLngExpression
}


@Injectable({
  providedIn: 'root' // check this parameter later.
})
export class DataService {
  markers: Marker[] = [
    {
      id: 1,
      name: 'Marker name 1',
      description: 'descr 1',
      position: [ 46.879966, -121.726909 ]
    },
  ];

  constructor() { }
 
  getMenus(): Observable<IMenu[]> {
    return of(MENUS);
  }

  getPlatforms(): Observable<IPlatform[]> {
    return of(PLATFORMS);
  }
  

  getEvents(): Observable<IEvent[]> {
    return of(EVENTS);
  }


}





