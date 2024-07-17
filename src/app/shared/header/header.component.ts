import { Component } from '@angular/core';
import{user} from '../../interfaces/userinterface'
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  value!: string;
  typing: boolean = false;
  onInputChange() {
    this.typing = this.value.length > 0;
  }
  users: user[] = [
    {
      name: 'Ammany Abuthuraya',
      img: "assets/images/female2.jpeg",
      massage: 'Welcome!',
      state: 'offline',
      time:'08:00'
    },
    ]
}

