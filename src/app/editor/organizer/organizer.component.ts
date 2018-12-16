import { Component, OnInit } from '@angular/core';
import {SelectItem} from 'primeng/api';

@Component({
  selector: 'app-organizer',
  templateUrl: './organizer.component.html',
  styleUrls: ['./organizer.component.scss']
})
export class OrganizerComponent implements OnInit {
  items: SelectItem[];

  selectedItem: any;

  constructor() { 
    this.items = [
      {value:{id:1, name: 'Target 1', code: 'NY'}},
      {value:{id:2, name: 'Target 2', code: 'NY'}},
      {value:{id:3, name: 'Target 3', code: 'NY'}},
      {value:{id:4, name: 'Target 4', code: 'NY'}},
      {value:{id:5, name: 'Target 5', code: 'NY'}},
      {value:{id:6, name: 'Target 6', code: 'NY'}},
      {value:{id:7, name: 'Target 7', code: 'NY'}},
  ];
  }

  ngOnInit() {
  }

}
