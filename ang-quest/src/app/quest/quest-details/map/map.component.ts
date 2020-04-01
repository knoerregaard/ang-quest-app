import { Component, OnInit, Input } from '@angular/core';

import Map from 'ol/Map';
import View from 'ol/View';
import TileLayer from 'ol/layer/Tile';
import XYZ from 'ol/source/XYZ';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})

export class MapComponent implements OnInit {
  
  /* @Input() fortæller at en property er et input fra en Parent komponent. */
  @Input() lat : number;
  @Input() long : number;

  /* Property der holder på et Map objekt */
  map : Map;

  constructor() {
  }

  ngOnInit(): void {
    console.log(this.lat, this.long)
  }

  /* Når angular er færdig med at loade view og child-views, kan vi binde map til template. */
  ngAfterViewInit() : void {
    this.map = new Map({
      target: 'map',
      layers: [
        new TileLayer({
          source: new XYZ({
            url: 'https://{a-c}.tile.openstreetmap.org/{z}/{x}/{y}.png'
          })
        })
      ],
      view: new View({
        center: [56.8, 9.0],
        zoom: 5,
        rotation : 3
      })
    });
  }

  /* Husk at 'npm install @types/ol' for at installere typer, så i kan anvende intellisence */
  zoomIn(){
    /* Vi benytter os af OpenLayers API til at manipulere med kortet */
    this.map.getView().setZoom(<number>(this.map.getView().getZoom() + 1))
  }

  zoomOut(){
    this.map.getView().setZoom(<number>(this.map.getView().getZoom() - 1))
  }
}