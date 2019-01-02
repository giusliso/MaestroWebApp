import { Injectable, Output, EventEmitter } from '@angular/core';
import { Store, select, State } from '@ngrx/store';
import {State as LayoutState} from 'src/app/store/layout-store/reducer';
import { NavigationDeniedAction } from 'src/app/store/layout-store/actions';


@Injectable({
  providedIn: 'root'
})
export class EditorService {
  @Output()
  public editorErrorEvent: EventEmitter<string> = new EventEmitter();
  private currentScene;
  private dataIsPersistent;

  constructor(private layoutStore: Store<LayoutState>) { 
    this.layoutStore.pipe(select('layout', 'currentScene'))
      .subscribe(scene => this.currentScene = scene)
    this.layoutStore.pipe(select('layout', 'dataIsPersistent'))
      .subscribe(data => this.dataIsPersistent = data)
  }

  public tryNavigate(action: Function): boolean {
    if ((this.currentScene === undefined)) {
      this.layoutStore.dispatch(new NavigationDeniedAction());
    }
    else if (this.dataIsPersistent) {
      action();
    } else {
      this.layoutStore.dispatch(new NavigationDeniedAction());
    }
    return this.dataIsPersistent;
  }
}
