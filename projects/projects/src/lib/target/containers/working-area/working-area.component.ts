import { Component, OnInit } from '@angular/core';
import { ViewChild } from '@angular/core';
import { Store, select } from '@ngrx/store';
import {State as LayoutState} from 'src/app/store/layout-store/reducer';
import { Target, Scene } from '../../../../api';
import { TargetState } from '../../reducers';
import { CreateTarget } from '../../actions';
import { first, filter } from 'rxjs/operators';
import { ProjectsService } from '../../../services/projects.service';
import { Subscription } from 'rxjs';
import { Area } from 'src/app/core';
import { Actions, ofType } from '@ngrx/effects';
import { LayoutActionTypes, LandMarkSetAction } from 'src/app/store/layout-store/actions';
import { style } from '@angular/animations';
@Component({
  selector: 'lib-working-area',
  templateUrl: './working-area.component.html',
  styleUrls: ['./working-area.component.scss']
})
export class WorkingAreaComponent implements OnInit {
  @ViewChild('myCanvas') myCanvas;
  public context: CanvasRenderingContext2D;
  public currentLandmark;
  private subscriptions: Subscription[] = [];
  private pointSize = 3;
  private isTargetArea = false;
  private currentScene;

  constructor(
    private project$ :ProjectsService,
    private layoutStore: Store<LayoutState>,
    private targetStore: Store<TargetState>,
    private update$: Actions,
    ) {
    
    // Load landmark of selected scene in working area.
    this.update$.pipe(ofType(LayoutActionTypes.LandMarkSet))
        .subscribe((item : LandMarkSetAction) => {
          const file: File = item.payload.landmark;
          this.setLandMark(file);     
        }
    );

    window.onresize = () =>  this.setCanvasDimension();

    this.layoutStore.pipe(filter( x => x !== undefined ||  x !== null), select('layout', 'selectedLandmark'))
      .subscribe(landmark => {
        this.setLandMark(landmark);
      });
    this.layoutStore.pipe(select('layout', 'area'))
      .subscribe(area => {
        this.isTargetArea = (area === Area.Target)
      });
      
    this.project$.removeTargetEvent
      .subscribe(
        (target: Target) => this.redrawCanvasTargets()
      );

   }

  
  getPosition(event){

    if(this.isTargetArea) {
      var rect = this.myCanvas.nativeElement.getBoundingClientRect();
      var x = event.clientX - rect.left;
      var y = event.clientY - rect.top;
      this.drawCoordinates(x,y);
     
     this.layoutStore.pipe(first(), select('layout', 'currentScene'))
       .subscribe( sceneArea => {
        const newTarget: Target = {
          coordinateX: x,
          coordinateY: y,
          sceneId : sceneArea.value.id
        };

        this.targetStore.dispatch(new CreateTarget({ target: newTarget}))
       });
     
    }
   }

  public clearArc(x,y){
      var context = this.myCanvas.nativeElement.getContext("2d");
      const radius = 20;
      context.beginPath();
      context.arc(x, y, radius, 0, 2 * Math.PI, false);
      context.clearRect(x - radius - 1, y - radius - 1,
                        radius * 2 + 2, radius * 2 + 2);
  }

  public drawCoordinates(x,y){

    var ctx = this.myCanvas.nativeElement.getContext("2d");

    ctx.beginPath();

    ctx.globalAlpha = 0.45; // set global alpha
    ctx.beginPath();
    ctx.arc(x, y, 10, 0, 2 * Math.PI, false);
    //ctx.fillStyle = "red";
    ctx.fill = 'transparent';
    ctx.lineWidth = 2;
    ctx.strokeStyle = "red";
    ctx.stroke();

    // for remove
    //ctx.clearRect(5, 2 * Math.PI, x, y);

}
  ngOnInit() {
    this.setCanvasDimension();
    this.subscriptions.push(this.layoutStore.pipe(select('layout', 'currentScene'))
      .subscribe(scene => this.currentScene = scene)) ;
    this.targetStore.pipe(first(), select('target', 'targets'))
    .subscribe((targets: Target[]) => 
      targets
      .filter( target => target.sceneId === this.currentScene.value.id)
      .forEach( 
        (target: Target) => this.drawCoordinates(target.coordinateX, target.coordinateY)
        ));
  }

  ngOnDestroy(){
    this.subscriptions.forEach(subsctription => subsctription.unsubscribe());

  }

  private redrawCanvasTargets() {
    var ctx = this.myCanvas.nativeElement.getContext("2d");
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    this.layoutStore.pipe(first(), select('layout', 'currentScene'))
      .subscribe(scene => this.currentScene = scene)
    this.targetStore.pipe(first(), select('target', 'targets'))
    .subscribe((targets: Target[]) => 
      targets
      .filter( target => target.sceneId === this.currentScene.value.id)
      .forEach( 
        (target: Target) => this.drawCoordinates(target.coordinateX, target.coordinateY)
        ));
  }

  private setCanvasDimension() {
    var ctx = this.myCanvas.nativeElement.getContext("2d");
    ctx.canvas.width  = document.getElementById('working-area').clientWidth;
    ctx.canvas.height  = document.getElementById('working-area').clientHeight;
  }

  private setLandMark(file: File){
    let fileReader = new FileReader();
    fileReader.onload = (e) => {
      document.getElementById('workingCanvas').style.background = 'url(' +  fileReader.result + ')';
      document.getElementById('workingCanvas').style.backgroundSize = '35vw';
      document.getElementById('workingCanvas').style.backgroundRepeat = 'no-repeat';
      document.getElementById('workingCanvas').parentElement.clientWidth;
      //ctx.canvas.height = window.innerHeight;
    }
    fileReader.readAsDataURL(file);
  }

  private getRndColor() {
    var r = 255*Math.random()|0,
        g = 255*Math.random()|0,
        b = 255*Math.random()|0;
    return 'rgb(' + r + ',' + g + ',' + b + ')';
   }

}
