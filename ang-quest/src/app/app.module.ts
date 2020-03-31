import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { QuestListComponent } from './quest/quest-list/quest-list.component';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import { QuestDetailsComponent } from './quest/quest-details/quest-details.component';

@NgModule({
  declarations: [
    AppComponent,
    QuestListComponent,
    QuestDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule, MatButtonModule, MatIconModule, MatListModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
