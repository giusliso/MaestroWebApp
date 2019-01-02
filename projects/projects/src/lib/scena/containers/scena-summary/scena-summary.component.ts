import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Scene } from '../../../../api';
import { Store, select } from '@ngrx/store';
import {State as LayoutState} from 'src/app/store/layout-store/reducer';
import { DetailsChangeAction } from 'src/app/store/layout-store/actions';
import { Subscription } from 'rxjs';
import { Dialog } from 'primeng/dialog';
@Component({
  selector: 'lib-scena-summary',
  templateUrl: './scena-summary.component.html',
  styleUrls: ['./scena-summary.component.css']
})

export class ScenaSummaryComponent implements OnInit {

  @ViewChild('errorDialog')
  errorDialog: Dialog;
  TextErrorDialog = "";
  displayErrorDialog = false;

  @ViewChild('summaryForm')
  currentScene: Scene;
  summaryForm: FormGroup;
  changeSubscription: Subscription;
  constructor(private layoutState: Store<LayoutState>) {

   }

  fillSummary(scena: Scene){
    this.currentScene = scena;
    this.clearData();
    this.summaryForm.controls['name'].patchValue(scena['name']);
    this.summaryForm.controls['description'].patchValue(scena['description']);
    this.summaryForm.enable();
    this.changeSubscription = this.summaryForm.
    valueChanges
      .subscribe(
        () => this.layoutState
          .dispatch(new DetailsChangeAction({item: null})));

  }

  ngOnInit() {
    this.initForm();

  }

  getSummary() {
    if(this.summaryForm.valid){
      this.currentScene.name = this.summaryForm.controls['name'].value;
      this.currentScene.description = this.summaryForm.controls['description'].value;
      return this.currentScene;
    }
    else {
      let wrongFields = [];
      Object.keys(this.summaryForm.controls).forEach(
        key => {
          if(this.summaryForm.controls[key].status === 'INVALID'){
            wrongFields.push(key);
          }
        }
      )
      if (wrongFields.length > 1) {
        this.TextErrorDialog = "The following fields are required : \n";
        wrongFields.forEach( item => this.TextErrorDialog += item + "\n");
      }
      else {
        this.TextErrorDialog = "The following field is required : " + wrongFields[0];
      }
      this.displayErrorDialog = true;
      return null;
    }
  }


  public clearData() {
    if (this.changeSubscription !== undefined) {
      this.changeSubscription.unsubscribe();
    }
    // if (this.summaryForm !== undefined) {
    //   Object.keys(this.summaryForm.controls).forEach(key => {
    //     this.summaryForm.controls[key].setValue('');
    //     this.summaryForm.controls[key].disable();
    //   });
    // }
  }
  private initForm(){
    this.summaryForm = new FormGroup({
      name: new FormControl('', [
        Validators.required,
        Validators.minLength(0),
        Validators.maxLength(20)
      ]),
      description: new FormControl('')
    });

    this.summaryForm.disable();
  }


}
