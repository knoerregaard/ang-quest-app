import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

import * as olProj from 'ol/proj';
import Map from 'ol/Map';
import View from 'ol/View';
import TileLayer from 'ol/layer/Tile';
import XYZ from 'ol/source/XYZ';
import { QuestService } from '../../quest.service';
import { QuestStoreService } from '../../quest-store.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})

export class MapComponent implements OnInit {

  /* @Input() fortæller at en property er et input fra en Parent komponent. */
  @Input() lat : number = 1;
  @Input() long : number = 1;

  quest : any;

  title : string = "";

  /* @Output() giver os mulighed for at emitte events til parent */
  @Output() outData = new EventEmitter<string>();

  /* Property der holder på et Map objekt */
  map : Map;

  constructor(private questStore : QuestStoreService) {
    this.questStore.quest$.subscribe(
      (suc)=>{
        //sette nye værdier for kortet med de data som kommer fra objektet
        this.map.getView().setCenter(olProj.fromLonLat([suc.long, suc.lat]))
      },
      (err)=>{console.log(err)},
      ()=>{console.log("finnally")}
    )
  }

  ngOnInit(): void {
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
        center : olProj.fromLonLat([this.long, this.lat]), //https://openlayers.org/en/latest/apidoc/module-ol_proj.html
        zoom : 5
      })
    });

  }

  /* Når angular er færdig med at loade view og child-views, kan vi binde map til template. */
  ngAfterViewInit() : void {
    /* Subscribe to  */
    this.questStore.quest$.subscribe(
      (suc)=>{
        this.map.getView().setCenter(olProj.fromLonLat([suc.long, suc.lat]))
      },
      (err)=>{console.log(err)},
      ()=>{console.log("done")}
    )
  }

  /* Husk at 'npm install @types/ol' for at installere typer, så i kan anvende intellisence og gøre jeres kode typestærkt */
  zoomIn(){
    /* Vi benytter os af OpenLayers API til at manipulere med kortet */
    this.map.getView().setZoom(<number>(this.map.getView().getZoom() + 1));
    this.outData.emit("ZoomIn");
  }

  zoomOut(){
    this.map.getView().setZoom(<number>(this.map.getView().getZoom() - 1))
    this.outData.emit("ZoomOut");
  }
}