import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AccordionModule} from 'primeng/accordion';     //accordion and accordion tab
import {MenubarModule} from 'primeng/menubar';
import {MenuItem} from 'primeng/api';
import {ButtonModule} from 'primeng/button';
import {PanelMenuModule} from 'primeng/panelmenu';
import {ToolbarModule} from 'primeng/toolbar';
import {ListboxModule} from 'primeng/listbox';
import {TabViewModule} from 'primeng/tabview';
import {FileUploadModule} from 'primeng/fileupload';
import {InputTextModule} from 'primeng/inputtext';

const GraphicModules = [
  AccordionModule,
  MenubarModule,
  ButtonModule,
  InputTextModule,
  ListboxModule,
  FileUploadModule,
  PanelMenuModule,
  TabViewModule,
  ToolbarModule
];

@NgModule({
  imports: [
    GraphicModules,
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
  ],
  exports: [
    GraphicModules
  ],
  declarations: []
})
export class GraphicModule { }
