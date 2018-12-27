import { NgModule } from '@angular/core';
import { ProjectsComponent } from './components/projects.component';
import { EditorModule } from 'src/app/editor/editor.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { TargetModule } from './target/target.module';
import { ScenaModule } from './scena/scena.module';
import { ScenarioModule } from './scenario/scenario.module';
import { LearningPathModule } from './learning-path/learning-path.module';

@NgModule({
  imports: [
    ScenaModule,
    ScenarioModule,
    LearningPathModule,
    TargetModule,
    SharedModule,
    TargetModule
  ],
  declarations: [ProjectsComponent],
  exports: [    
    ScenaModule,
    TargetModule,
    ScenarioModule,
    LearningPathModule]
})
export class ProjectsModule { }
