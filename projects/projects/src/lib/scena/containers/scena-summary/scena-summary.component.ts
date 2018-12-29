import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Scene } from '../../../../api';

@Component({
  selector: 'lib-scena-summary',
  templateUrl: './scena-summary.component.html',
  styleUrls: ['./scena-summary.component.css']
})

export class ScenaSummaryComponent implements OnInit {

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
