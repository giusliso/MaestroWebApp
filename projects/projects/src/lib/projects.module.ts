import { NgModule } from '@angular/core';
import { ProjectsComponent } from './components/projects.component';
import { TargetAreaComponent } from './target/containers/target-area/target-area.component';
import { EditorModule } from 'src/app/editor/editor.module';
import { TargetDetailsComponent } from './target/containers/target-details/target-details.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    EditorModule,
    SharedModule
  ],
  declarations: [ProjectsComponent, TargetAreaComponent, TargetDetailsComponent],
  exports: [ProjectsComponent]
})
export class ProjectsModule { }
