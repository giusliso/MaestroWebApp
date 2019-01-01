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

  public tryNavigate(action: any, cancellation = null): boolean {
    if (this.dataIsPersistent) {
      action();
    } else if ((this.currentScene === undefined)) {
      cancellation();
      return false;
    }
    else {
      if (cancellation !== null) {
        cancellation();
      }
      this.layoutStore.dispatch(new NavigationDeniedAction());
    }
    return this.dataIsPersistent;
  }
}
