import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MassagesComponent } from './massages/massages.component';
import { BrowserModule } from '@angular/platform-browser';



@NgModule({
  declarations: [
    MassagesComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
  ],
  exports:[
    MassagesComponent
  ]
})
export class MassageModule { }
