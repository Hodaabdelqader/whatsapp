import { Component } from '@angular/core';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.css']
})
export class TagsComponent {

    items: string[] = ['All', 'Unread', 'Groups'];
    selectedItem: string = 'All';

    selectItem(item: string) {
      this.selectedItem = item;
    }
  }


