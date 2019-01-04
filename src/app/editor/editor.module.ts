import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { OrganizerComponent } from './organizer/organizer.component';
import { DetailsComponent } from './details/details.component';
import { NavigationPaneComponent } from './navigation-pane/navigation-pane.component';
import { EditorContainerComponent } from './editor-container/editor-container.component';
import { ImportComponent } from './dashboard/import/import.component';
import { SharedModule } from '../shared/shared.module';
import { ProjectsModule } from '../../../projects/projects/src/lib/projects.module';
import { MenuComponent } from './menu/menu.component';
@NgModule({
  imports: [CommonModule, SharedModule],
  declarations: [
    DashboardComponent,
    OrganizerComponent,
    DetailsComponent,
    NavigationPaneComponent,
    EditorContainerComponent,
    ImportComponent,
    MenuComponent
  ],
  exports: [
    DashboardComponent,
    OrganizerComponent,
    DetailsComponent,
    NavigationPaneComponent,
    EditorContainerComponent
  ]
})
export class EditorModule {}
