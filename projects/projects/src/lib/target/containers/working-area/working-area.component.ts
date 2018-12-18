import { Component, OnInit } from '@angular/core';
import { ViewChild } from '@angular/core';
import { Store, select } from '@ngrx/store';
import {State as LayoutState} from 'src/app/store/layout-store/reducer';
import { Target } from 'src/app/models';
import { TargetState } from '../../reducers';
import { CreateTarget } from '../../actions';

@Component({
  selector: 'lib-working-area',
  templateUrl: './working-area.component.html',
  styleUrls: ['./working-area.component.scss']
})
export class WorkingAreaComponent implements OnInit {
  @ViewChild('myCanvas') myCanvas;
  public context: CanvasRenderingContext2D;
  private pointSize = 3;
  private isTargetArea = false;

  constructor(
    private layoutStore: Store<LayoutState>,
    private targetStore: Store<TargetState>
    ) {
    this.layoutStore.pipe(select('layout', 'area'))
      .subscribe(area => this.isTargetArea = (area === "TARGET"));
   }

  getPosition(event){
    if(this.isTargetArea) {
      var rect = this.myCanvas.nativeElement.getBoundingClientRect();
      var x = event.clientX - rect.left;
      var y = event.clientY - rect.top;
      this.drawCoordinates(x,y);
      const newTarget: Target = {
        position: {
          x: x,
          y: y
        }
      };
     this.targetStore.dispatch(new CreateTarget({ target: newTarget}));
    }
   }

   drawCoordinates(x,y){
    var ctx = this.myCanvas.nativeElement.getContext("2d");

    ctx.beginPath();

    ctx.globalAlpha = 0.45; // set global alpha
    ctx.beginPath();
    ctx.arc(x, y, 5, 0, 2 * Math.PI, false);
    ctx.fillStyle = "red";
    ctx.fill();

    // for remove
    //ctx.clearRect(5, 2 * Math.PI, x, y);

}
  ngOnInit() {
  }

}
