import { Injectable, Output, EventEmitter  } from '@angular/core';

import { Target } from 'src/app/models';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
  @Output() drawTargetEvent = new EventEmitter<Target>();

  constructor() { }

  drawTarget(target: Target){
    this.drawTargetEvent.emit(target);
  }
}
