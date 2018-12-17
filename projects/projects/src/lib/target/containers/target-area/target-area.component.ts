import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-target-area',
  templateUrl: './target-area.component.html',
  styleUrls: ['./target-area.component.scss']
})
export class TargetAreaComponent implements OnInit {
   public organizerProps;
  constructor() {
    this.organizerProps = [
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
