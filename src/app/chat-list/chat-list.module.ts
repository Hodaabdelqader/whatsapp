import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatsComponent } from './chats/chats.component';
import { BrowserModule } from '@angular/platform-browser';



@NgModule({
  declarations: [
    ChatsComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
  ],
  exports:[
  ChatsComponent
  ]
})
export class ChatListModule { }
