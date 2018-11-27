import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { OrganizerComponent } from './organizer/organizer.component';
import { WorkingAreaComponent } from './working-area/working-area.component';
import { DetailsComponent } from './details/details.component';
import { NavigationPaneComponent } from './navigation-pane/navigation-pane.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [DashboardComponent, OrganizerComponent, WorkingAreaComponent, DetailsComponent, NavigationPaneComponent]
})
export class EditorModule { }
