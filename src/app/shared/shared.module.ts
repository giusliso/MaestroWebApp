
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ngfModule } from 'angular-file';
import { GraphicModule } from '../core';

@NgModule({
  imports: [
    BrowserModule, 
    FormsModule, 
    ReactiveFormsModule, 
    HttpClientModule,
    ngfModule,
    GraphicModule
  ],
  declarations: [],
  exports: [ngfModule, GraphicModule, FormsModule]
})
export class SharedModule { }
