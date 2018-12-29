import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Target } from '../../../../api';

@Component({
  selector: 'lib-target-summary',
  templateUrl: './target-summary.component.html',
  styleUrls: ['./target-summary.component.scss']
})
export class TargetSummaryComponent implements OnInit {

  @ViewChild('summaryForm')
  summaryForm: FormGroup;

  constructor() { }

  fillSummary(target: Target){
    this.summaryForm.controls['name'].patchValue(target['name']);
  }

  ngOnInit() {
    this.initForm();
  }

  private initForm(){
    this.summaryForm = new FormGroup({
      name: new FormControl('', [
        Validators.required,
        Validators.minLength(0),
        Validators.maxLength(20)
      ])
    });
  }

}
