import { NgModule } from '@angular/core';
import { ProjectsComponent } from './components/projects.component';
import { EditorModule } from 'src/app/editor/editor.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { TargetModule } from './target/target.module';

@NgModule({
  imports: [
    SharedModule,
    TargetModule
  ],
  declarations: [ProjectsComponent],
  exports: []
})
export class ProjectsModule { }
