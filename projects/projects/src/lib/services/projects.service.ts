import { Injectable, Output, EventEmitter } from '@angular/core';

import { Target } from '../../api';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
  @Output() drawTargetEvent = new EventEmitter<Target>();
  @Output() removeTargetEvent = new EventEmitter<Target>();

  constructor() {}

  drawTarget(target) {
    this.drawTargetEvent.emit(target);
  }

  removeTarget(target: Target) {
    if (target !== null) {
      this.removeTargetEvent.emit(target);
    }
  }
}
