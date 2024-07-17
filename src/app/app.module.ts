import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { ChatsComponent } from './chat-list/chats/chats.component';
import { ChatListModule } from './chat-list/chat-list.module';
import { ButtonModule } from 'primeng/button';
import { MassageModule } from './massage/massage.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    ChatListModule,
    ButtonModule,
    ChatListModule,
    MassageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
