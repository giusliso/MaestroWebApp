import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { reducer } from './reducer';

@NgModule({
  imports: [CommonModule, StoreModule.forFeature('layout', reducer)]
})
export class LayoutStoreModule {}
