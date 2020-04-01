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

  map : Map;

  constructor() { }

  ngOnInit(): void {

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
        center: [56, 9],
        zoom: 5
      })
    });
  }
}
