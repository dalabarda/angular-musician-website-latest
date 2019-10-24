import { Component, OnInit } from '@angular/core';
import * as L from 'leaflet';
import 'leaflet.markercluster';


//  TESTING POSSIBILITIES OF HAVING A MAP Component
//  THIS COMPONENT IS NOT IN USE YET

export class Marker extends L.Marker {
  id: number;
}

@Component({
  selector: 'my-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  map: L.Map;
  camerasLayer: L.MarkerClusterGroup;
  online = L.divIcon({ html: `<div class="online"></div>` });
  offline = L.divIcon({ html: `<div class="offline"></div>` });
  cameras = [
    { id: 1, lat: 53.92058, lng: 21.51282 },
    { id: 2, lat: 53.92058, lng: 21.51482 },
    { id: 3, lat: 53.92058, lng: 21.51682 },
    { id: 4, lat: 53.92058, lng: 21.51882 },
    { id: 5, lat: 53.92058, lng: 21.52082 },
    { id: 6, lat: 53.92058, lng: 21.52282 }
  ];

  ngOnInit() {
    this.init();
    this.addCamerasLayer('green');
    this.addCameras();
    setTimeout(() => this.setCameraOffById(2), 2000);
    setTimeout(() => this.setCameraOffById(3), 3000);
    setTimeout(() => this.setCameraOffById(4), 4000);
    setTimeout(() => this.setCameraOffById(5), 5000);
  }

  init() {
    this.map = new L.Map('map', {
      layers: [L.tileLayer(
        'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
        { subdomains: ['a', 'b', 'c'], maxZoom: 19 })],
      center: new L.LatLng(53.92058, 21.51282),
      zoomControl: false,
      zoom: 15
    });
  }

  addCamerasLayer(color: string) {
    this.camerasLayer = L.markerClusterGroup({
      disableClusteringAtZoom: 14,
      chunkedLoading: false,
      spiderfyOnMaxZoom: false,
      showCoverageOnHover: false,
      zoomToBoundsOnClick: true,
      removeOutsideVisibleBounds: true,
      maxClusterRadius: 90,
      iconCreateFunction: function (cluster) {
        return L.divIcon({
          html:
          '<svg height="50" width="50" style="transform: translate3d(-25px, -25px, 0px)">' +
          '<circle cx="25" cy="25" r="25" fill=' + color + ' />' +
          '<text x="25" y="30" text-anchor="middle" font-size="16px" fill="white">' + cluster.getChildCount() + '</text>' +
          '</svg>'
        });
      }
    });
    this.map.addLayer(this.camerasLayer);
  }

  addCameras() {
    this.cameras.forEach(camera => {
      const marker = new Marker([camera.lat, camera.lng], { icon: this.online });
      marker.id = camera.id;
      this.camerasLayer.addLayer(marker);
      marker.bindPopup(`${marker.id}`).openPopup();
    });
  }

  setCameraOffById(id: number) {
    const cameraMarkers = <Marker[]>this.camerasLayer.getLayers();
    const camera = cameraMarkers.filter(marker => marker.id === id)[0];
    camera.setIcon(this.offline);
  }



}


// REFERENCE CODE

@Component({
  selector: 'my-app2',
  template: `
    <div style="height: 400px; width: 600px"
      leaflet 
      [leafletOptions]="options"
      (leafletMapReady)="onMapReady($event)">
    </div>
    <button (click)="addMarker()">Add markers</button>
    <button (click)="mutateMarkerData()">Mutate data</button>
    <hr />
    <span *ngFor="let marker of markers" style="border:1px solid black; margin:5px;">{{ marker.name }} <a href="#" (click)="removeMarker(marker)">(remove)</a></span>
  `
})
export class AppComponent implements DoCheck {
  map;
  markers: MarkerMetaData[] = [];
  options = {
    layers: [
      tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png')
    ],
    zoom: 5,
    center: latLng(46.879966, -121.726909)
  };

  constructor(private dataService: DataService, private resolver: ComponentFactoryResolver, private injector: Injector){}

  onMapReady(map) {
    // get a local reference to the map as we need it later
    this.map = map;
  }

  addMarker() {
    // simply iterate over the array of markers from our data service
    // and add them to the map
    for(const entry of this.dataService.getMarkers()) {
      // dynamically instantiate a HTMLMarkerComponent
      const factory = this.resolver.resolveComponentFactory(HTMLMarkerComponent);

      // we need to pass in the dependency injector
      const component = factory.create(this.injector);

      // wire up the @Input() or plain variables (doesn't have to be strictly an @Input())
      component.instance.data = entry;

      // we need to manually trigger change detection on our in-memory component
      // s.t. its template syncs with the data we passed in
      component.changeDetectorRef.detectChanges();


      // create a new Leaflet marker at the given position
      let m = marker(entry.position);

      // pass in the HTML from our dynamic component
      const popupContent = component.location.nativeElement;

      // add popup functionality
      m.bindPopup(popupContent).openPopup();

      // finally add the marker to the map s.t. it is visible
      m.addTo(this.map);

      // add a metadata object into a local array which helps us
      // keep track of the instantiated markers for removing/disposing them later
      this.markers.push({
        name: entry.name,
        markerInstance: m,
        componentInstance: component
      });
    }
  }

  removeMarker(marker) {
    // remove it from the array meta objects
    const idx = this.markers.indexOf(marker);
    this.markers.splice(idx, 1);

    // remove the marker from the map
    marker.markerInstance.removeFrom(this.map);

    // destroy the component to avoid memory leaks
    marker.componentInstance.destroy();
  }

  // simulate some change which needs
  // to trigger updates on our dynamic components
  mutateMarkerData() {
    // this provocates changes which the components on the markers have to re-render
    this.dataService.changeMarkerData();
  }

  // This is a lifecycle method of an Angular component which gets invoked whenever for
  // our component change detection is triggered
  ngDoCheck() {
    // since our components are dynamic, we need to manually iterate over them and trigger
    // change detection on them.
    this.markers.forEach(entry => {
      entry.componentInstance.changeDetectorRef.detectChanges();
    })
  }

}


/////////////////////////////////////////////////////////////////////////

import { DataService } from './data.service';

@Component({
  selector: 'html-marker',
  template: `
    <h3>{{ data.name }}</h3>
    <p>
      {{ data.description }}
    </p>
  `
})
export class HTMLMarkerComponent {
  @Input() data;
}
/////////////////////////////////////////////////////////////////////////

import { Injectable } from '@angular/core';
import { LatLngExpression} from 'leaflet';

export class Marker {
  id: number;
  name: String;
  description: String;
  position: LatLngExpression
}

@Injectable()
export class DataService {
  markers: Marker[] = [
    {
      id: 1,
      name: 'Marker name 1',
      description: 'descr 1',
      position: [ 46.879966, -121.726909 ]
    },
    {
      id: 2,
      name: 'Marker name 2',
      description: 'descr 2',
      position: [ 46.000966, -123.726909 ]
    }
  ];

  getMarkers() {
    return this.markers;
  }

  getMarkerById(id) {
    return this.markers.filter((entry) => entry.id === id)[0];
  }

  changeMarkerData() {
    for(let marker of this.markers) {
      // just add a random number at the end
      marker.description = `Some random value ${Math.random() * 100}`;
    }
  }

}