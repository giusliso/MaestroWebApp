import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Scene } from '../../../../api';
import { Store, select } from '@ngrx/store';
import {State as LayoutState} from 'src/app/store/layout-store/reducer';
import { DetailsChangeAction } from 'src/app/store/layout-store/actions';
import { Subscription } from 'rxjs';
@Component({
  selector: 'lib-scena-summary',
  templateUrl: './scena-summary.component.html',
  styleUrls: ['./scena-summary.component.css']
})

export class ScenaSummaryComponent implements OnInit {

  @ViewChild('summaryForm')
  summaryForm: FormGroup;
  changeSubscription: Subscription;
  constructor(private layoutState: Store<LayoutState>) {

   }

  fillSummary(scena: Scene){
    this.clearData();
    this.summaryForm.controls['name'].patchValue(scena['name']);
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
