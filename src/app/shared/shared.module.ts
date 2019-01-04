import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ngfModule } from 'angular-file';
import { GraphicModule } from '../core';
import { StoreModule } from '@ngrx/store';
import { RootStoreModule } from '../store/root-store.module';
import { ContextMenuModule } from 'ngx-contextmenu';
@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ngfModule,
    GraphicModule,
    RootStoreModule,
    ContextMenuModule.forRoot()
  ],
  declarations: [],
  exports: [
    ngfModule,
    GraphicModule,
    FormsModule,
    RootStoreModule,
    ReactiveFormsModule,
    ContextMenuModule
  ]
})
export class SharedModule {}
