import { Component, OnInit } from '@angular/core';
import { ViewChild } from '@angular/core';

@Component({
  selector: 'app-working-area',
  templateUrl: './working-area.component.html',
  styleUrls: ['./working-area.component.scss']
})
export class WorkingAreaComponent implements OnInit {
  @ViewChild('myCanvas') myCanvas;
  public context: CanvasRenderingContext2D;
  private pointSize = 3;

  constructor() { }

  getPosition(event){
    console.log(this.myCanvas);
    var rect = this.myCanvas.nativeElement.getBoundingClientRect();
    var x = event.clientX - rect.left;
    var y = event.clientY - rect.top;
       
    this.drawCoordinates(x,y);
   }

   drawCoordinates(x,y){	
    var ctx = this.myCanvas.nativeElement.getContext("2d");  

    ctx.beginPath();

    ctx.globalAlpha = 0.45; // set global alpha
    ctx.beginPath();
    ctx.arc(x, y, 5, 0, 2 * Math.PI, false);
    ctx.fillStyle = "red";
    ctx.fill();
}
  ngOnInit() {
  }

}
