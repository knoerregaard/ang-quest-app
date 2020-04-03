import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

import * as olProj from 'ol/proj';
import Map from 'ol/Map';
import View from 'ol/View';
import TileLayer from 'ol/layer/Tile';
import XYZ from 'ol/source/XYZ';
import { QuestStoreService } from '../../quest-store.service';
import { LocationService } from '../../location.service';

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

  /* Vores map-komponent er interesseret i vores QuestStore, 
  fordi den holder på vores aktive quest. 
  Fordi vi har angivet quest$ som en observable, kan vi subscribe på den og få
  data når der sker ændringer. subscribe() tager tre argumenter - success, error og finally.
  Nå vi har success objektet tilrådighed, har vi et quest-objekt, som vi kan benytte
  til at opdatere vores kort.
  */
  constructor(
    private questStore : QuestStoreService,
    private locationService : LocationService
    ) {
      this.locationService.position$.subscribe(
        (suc)=>{
          console.log(suc);
        },
        (err)=>{console.log(err);},
        ()=>{console.log("finnally");
        }
      );
  }
  /* NgOninit kan benyttes til at initere kortet.  */
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
        center : olProj.fromLonLat([1, 1]), //https://openlayers.org/en/latest/apidoc/module-ol_proj.html
        zoom : 5
      })
    });

  }

  ngAfterViewInit(){
    this.questStore.quest$.subscribe(
      (suc)=>{
        //sette nye værdier for kortet med de data som kommer fra objektet
        this.map.getView().setCenter(olProj.fromLonLat([suc.long, suc.lat]))
      },
      (err)=>{console.log(err)},
      ()=>{console.log("finnally")}
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