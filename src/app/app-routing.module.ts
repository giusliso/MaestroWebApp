import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { TargetAreaComponent, ScenaAreaComponent, ScenarioAreaComponent, LearningPathAreaComponent } from '../../projects/projects/src/public_api';
import { EditorContainerComponent } from './editor/editor-container/editor-container.component';
const routes: Routes = [
  { path: '', redirectTo: '/scena', pathMatch: 'full' },
  {
    path: 'target',
    component: TargetAreaComponent,
    pathMatch: 'full'
  },
  {
    path: 'scena',
    component: ScenaAreaComponent,
    pathMatch: 'full'
  },
  {
    path: 'scenario',
    component: ScenarioAreaComponent,
    pathMatch: 'full'
  },
  {
    path: 'learning-path',
    component: LearningPathAreaComponent,
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
