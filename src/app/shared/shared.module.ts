import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { SearchbarComponent } from './searchbar/searchbar.component';
import { ButtonModule } from 'primeng/button';
import { FormsModule } from '@angular/forms';
import { TagsComponent } from './tags/tags.component';
import { ChatListModule } from '../chat-list/chat-list.module';
import { MassageModule } from '../massage/massage.module';
import { InputTextModule } from 'primeng/inputtext';




@NgModule({
  declarations: [
    HeaderComponent,
    SearchbarComponent,
    TagsComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    BrowserModule,
    ButtonModule,
    FormsModule,
    ChatListModule,
    MassageModule,
    InputTextModule,
  ],
  exports:[
    HeaderComponent,
  ]
})
export class SharedModule { }
