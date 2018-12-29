import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Scene } from '../../../../api';


@Component({
  selector: 'lib-learning-path-summary',
  templateUrl: './learning-path-summary.component.html',
  styleUrls: ['./learning-path-summary.component.css']
})
export class LearningPathSummaryComponent implements OnInit {

  @ViewChild('summaryForm')
  summaryForm: FormGroup;

  constructor() { }

  fillSummary(scena: Scene){
    this.summaryForm.controls['name'].patchValue(scena['name']);
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
