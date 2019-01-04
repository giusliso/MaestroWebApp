import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Scenario } from '../../../../api';
import { Store, select } from '@ngrx/store';
import { State as LayoutState } from 'src/app/store/layout-store/reducer';
import { DetailsChangeAction } from 'src/app/store/layout-store/actions';
import { Subscription } from 'rxjs';
import { Dialog } from 'primeng/dialog';
@Component({
  selector: 'lib-scenario-summary',
  templateUrl: './scenario-summary.component.html',
  styleUrls: ['./scenario-summary.component.css']
})
export class ScenarioSummaryComponent implements OnInit {
  @ViewChild('errorDialog')
  errorDialog: Dialog;
  TextErrorDialog = '';
  displayErrorDialog = false;

  @ViewChild('summaryForm')
  currentScenario: Scenario;
  summaryForm: FormGroup;
  changeSubscription: Subscription;
  constructor(private layoutState: Store<LayoutState>) {
    this.initForm();
  }

  fillSummary(scenario: Scenario) {
    this.clearData();
    if (scenario === undefined) {
      this.summaryForm.reset();
      this.summaryForm.disable();
    } else {
      this.currentScenario = scenario;
      this.summaryForm.controls['name'].patchValue(scenario['name']);
      this.summaryForm.controls['description'].patchValue(
        scenario['description']
      );
      this.summaryForm.enable();

      this.changeSubscription = this.summaryForm.valueChanges.subscribe(() =>
        this.layoutState.dispatch(new DetailsChangeAction({ item: null }))
      );
    }
  }

  ngOnInit() {}

  ngOnDestroy() {
    this.clearData();
  }

  getSummary() {
    if (this.summaryForm.valid) {
      this.currentScenario.name = this.summaryForm.controls['name'].value;
      this.currentScenario.description = this.summaryForm.controls[
        'description'
      ].value;
      return this.currentScenario;
    } else {
      let wrongFields = [];
      Object.keys(this.summaryForm.controls).forEach(key => {
        if (this.summaryForm.controls[key].status === 'INVALID') {
          wrongFields.push(key);
        }
      });
      if (wrongFields.length > 1) {
        this.TextErrorDialog = 'The following fields are required : \n';
        wrongFields.forEach(item => (this.TextErrorDialog += item + '\n'));
      } else {
        this.TextErrorDialog =
          'The following field is required : ' + wrongFields[0];
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

  private initForm() {
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
