import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Target } from '../../../../api';
import { Store, select } from '@ngrx/store';
import {State as LayoutState} from 'src/app/store/layout-store/reducer';
import { DetailsChangeAction } from 'src/app/store/layout-store/actions';
import { Subscription } from 'rxjs';
import { Dialog } from 'primeng/dialog';
@Component({
  selector: 'lib-target-summary',
  templateUrl: './target-summary.component.html',
  styleUrls: ['./target-summary.component.scss']
})

export class TargetSummaryComponent implements OnInit {

  @ViewChild('errorDialog')
  errorDialog: Dialog;
  TextErrorDialog = "";
  displayErrorDialog = false;

  @ViewChild('summaryForm')
  currentTarget: Target;
  summaryForm: FormGroup;
  changeSubscription: Subscription;
  constructor(private layoutState: Store<LayoutState>) {
    this.initForm();
   }

  fillSummary(target: Target){
    this.clearData();
    if(target === undefined){
      this.summaryForm.reset();
      this.summaryForm.disable();
    }
    else {
      this.currentTarget = target;

      this.summaryForm.controls['name'].patchValue(target['name']);
        this.summaryForm.controls['description'].patchValue(target['description']);
        this.summaryForm.enable();
    
        this.changeSubscription = this.summaryForm.
        valueChanges
          .subscribe(
            () => this.layoutState
              .dispatch(new DetailsChangeAction({item: null})));      
    }
  }

  ngOnInit() {

  }

  ngOnDestroy() {
    this.clearData();
  }

  getSummary() {
    if(this.summaryForm.valid){
      this.currentTarget.name = this.summaryForm.controls['name'].value;
      this.currentTarget.description = this.summaryForm.controls['description'].value;
      return this.currentTarget;
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
