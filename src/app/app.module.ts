import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { EditorModule } from './editor/editor.module';
import { AppRoutingModule } from './app-routing.module';
import { ProjectsModule } from '../../projects/projects/src/public_api';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    ProjectsModule,
    BrowserModule,
    EditorModule,
    SharedModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
