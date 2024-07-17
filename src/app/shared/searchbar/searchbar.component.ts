import { Component } from '@angular/core';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.css']
})
export class SearchbarComponent {
  inputValue: string = '';
  typing: boolean = false;
  value: any;

  onIconChange() {
    this.typing = this.value.length > 0;
  }
}
