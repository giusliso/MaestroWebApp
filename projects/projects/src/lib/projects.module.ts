import { NgModule } from '@angular/core';
import { ProjectsComponent } from './components/projects.component';
import { EditorModule } from 'src/app/editor/editor.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { TargetModule } from './target/target.module';
import { ScenaModule } from './scena/scena.module';
import { ScenarioModule } from './scenario/scenario.module';
import { LearningPathModule } from './learning-path/learning-path.module';
import { ProjectsService } from './services/projects.service';
import { ContentModule } from './content/content.module';

@NgModule({
  imports: [
    ContentModule,
    ScenaModule,
    ScenarioModule,
    LearningPathModule,
    TargetModule,
    SharedModule,
    TargetModule
  ],
  declarations: [ProjectsComponent],
  providers: [ProjectsService],
  exports: [    
    ScenaModule,
    TargetModule,
    ScenarioModule,
    LearningPathModule,
    ContentModule
  ]
})
export class ProjectsModule { }
