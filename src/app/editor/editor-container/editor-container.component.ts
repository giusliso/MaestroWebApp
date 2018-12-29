import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-editor-container',
  templateUrl: './editor-container.component.html',
  styleUrls: ['./editor-container.component.scss']
})
export class EditorContainerComponent implements OnInit {
  @Input()
  organizerProps;

  @Input()
  contextMenuProps;

  @Input()
  menuProps;

  constructor() {
    console.log(this.organizerProps);
   }

  ngOnInit() {
  }

}
