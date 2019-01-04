import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AccordionModule } from 'primeng/accordion'; //accordion and accordion tab
import { MenubarModule } from 'primeng/menubar';
import { MenuItem } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { PanelMenuModule } from 'primeng/panelmenu';
import { ToolbarModule } from 'primeng/toolbar';
import { ListboxModule } from 'primeng/listbox';
import { TabViewModule } from 'primeng/tabview';
import { FileUploadModule } from 'primeng/fileupload';
import { InputTextModule } from 'primeng/inputtext';
import { MegaMenuModule } from 'primeng/megamenu';
import { DialogModule } from 'primeng/dialog';
import { PickListModule } from 'primeng/picklist';
import { DynamicDialogModule } from 'primeng/dynamicdialog';

const GraphicModules = [
  AccordionModule,
  MenubarModule,
  ButtonModule,
  DynamicDialogModule,
  DialogModule,
  MegaMenuModule,
  InputTextModule,
  ListboxModule,
  FileUploadModule,
  PanelMenuModule,
  TabViewModule,
  ToolbarModule,
  PickListModule
];

@NgModule({
  imports: [
    GraphicModules,
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule
  ],
  exports: [GraphicModules],
  declarations: []
})
export class GraphicModule {}
