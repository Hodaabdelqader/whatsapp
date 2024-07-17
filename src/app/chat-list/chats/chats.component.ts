import { Component } from '@angular/core';
import{user} from '../../interfaces/userinterface'

@Component({
  selector: 'app-chats',
  templateUrl: './chats.component.html',
  styleUrls: ['./chats.component.css']
})
export class ChatsComponent {
  users: user[] = [
    {
      name: 'hoda adel',
      img: "assets/images/female.jpeg",
      massage: 'hi',
      state: 'online',
      time:'12:09'
    },
    {
      name: 'youssef abodawoud',
      img: "assets/images/male.jpeg",
      massage: 'can you help me ,please',
      state: 'online',
      time:'10:12'
    },
    {
      name: 'Ammany Abuthuraya',
      img: "assets/images/female2.jpeg",
      massage: 'Welcome!',
      state: 'offline',
      time:'08:00'
    },
    ]
}
