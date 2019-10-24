import { Component, ComponentRef, OnInit } from '@angular/core';
import { EventService } from './event.service';
import {  IEvent } from '../../../data/data';
import { Subscription } from 'rxjs/Subscription';

import * as L from 'leaflet';


@Component({
    selector: 'dv-event-map',
    templateUrl: './event-map.component.html',
    styleUrls: ['./event-map.component.css']
})
export class EventMapComponent implements OnInit {
  event: IEvent | null;
  sub: Subscription;
  _x: number;
  _y: number;
  _map: any;
  
  get lat(): number {
    return this.event === null || undefined 
      ? 0
      : this.event.location == null || undefined  
        ? 0
        : this.event.location.yLat;
  }

  get lng(): number {
    return this.event == null || undefined 
      ? 0 
      : this.event.location == null || undefined  
        ? 0 
        : this.event.location.xLng;
  }

  constructor(private eventService: EventService,
              ) { console.log(this.event) }
  
  ngOnInit() {
  
    this.sub = this.eventService.selectedProductChanges$.subscribe(
      selectedConcert => {
        // this is to prevent reloading the map of already selected event
        if (this.event == selectedConcert && this.event != null)
          return
        else
          this.event = selectedConcert;
          if (this._map != undefined)
            // removing the map to reload it
            this._map.remove();
          
          // load the map into #map
          this.loadmap(this.lat, this.lng)

      }
    );
    
    // MAYBE AN IDEA TO CREATE AN ZOOM IN EFFECT???? but there is Control.Zoom... read more about
    // setInterval(function(){
    //   map.setView([0, 0]);
    //   setTimeout(function(){
    // 	  map.setView([60, 0]);
    //   }, 2000);
    // }, 4000);
  
  }

  loadmap(y: number, x: number) {
    // maps
    const hot = 'https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png';
    const osm = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';

    // attributes
    const attr = '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors';
    const attr2 = 'Map data © OpenStreetMap and contributors CC-BY-SA';
    
    // layer info
    var lyr = L.tileLayer(osm, { 
      maxZoom: 18, 
      attribution: attr2 });

    // initialize the map on the "map" div
    this._map = L.map('map', { layers: lyr, tap: false } ); 
    
    // setting the metric scale
    L.control.scale({imperial:false}).addTo(this._map);

    // add a marker to the center
    L.marker([this.lat, this.lng]).addTo(this._map);
    // berlin, but we don't use bounds here
    // var bounds = [ [52.6, 13.1], [52.4, 13.7] ];

    if (this.lat != 0) {
      return this._map.setView([y, x], 13);
    }

  }


  ngOnDestroy(): void {
      this.sub.unsubscribe();
  }




}