import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { QuestListComponent } from './quest/quest-list/quest-list.component';

/* Import af alle Materialkomponenter start */
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import { QuestDetailsComponent } from './quest/quest-details/quest-details.component';
import { MapComponent } from './quest/quest-details/map/map.component';
import { LocationService } from './quest/location.service';

/* Import af alle Materialkomponenter slut */

/* I deklaration skal i smide alle komponenter. I Imports smider i alle moduler. */
@NgModule({
  declarations: [
    AppComponent,
    QuestListComponent,
    QuestDetailsComponent,
    MapComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule, MatButtonModule, MatIconModule, MatListModule
  ],
  providers: [ LocationService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
