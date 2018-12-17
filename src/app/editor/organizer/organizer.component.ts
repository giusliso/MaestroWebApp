import { Component, OnInit, Input } from '@angular/core';
import {SelectItem} from 'primeng/api';

@Component({
  selector: 'app-organizer',
  templateUrl: './organizer.component.html',
  styleUrls: ['./organizer.component.scss']
})
export class OrganizerComponent implements OnInit {
  @Input()
  props: SelectItem[] = [];

  selectedItem: any;

  constructor() { 

  }

  ngOnInit() {
  }

}
