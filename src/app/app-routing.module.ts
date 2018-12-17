import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { TargetAreaComponent } from '../../projects/projects/src/public_api';
import { EditorContainerComponent } from './editor/editor-container/editor-container.component';
const routes: Routes = [
  {
    path: 'target',
    component: TargetAreaComponent,
    pathMatch: 'full'
  },
  { path: 'demo', 
    component: EditorContainerComponent
  }
]
@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
