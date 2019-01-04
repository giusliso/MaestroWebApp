import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CreateLearningPath } from '../../actions';
import { Store, select } from '@ngrx/store';
import { LearningPath } from '../../../../api';
import { LearningPathState } from '../../reducers';
import { Dialog } from 'primeng/dialog';
import { first } from 'rxjs/operators';
import { State as LayoutState } from 'src/app/store/layout-store/reducer';

@Component({
  selector: 'lib-learning-path-create-dialog',
  templateUrl: './learning-path-create-dialog.component.html',
  styleUrls: ['./learning-path-create-dialog.component.scss']
})
export class LearningPathCreateDialogComponent implements OnInit {
  @ViewChild('errorDialog')
  errorDialog: Dialog;
  public display = false;
  summaryForm: FormGroup;
  TextErrorDialog = '';
  displayErrorDialog = false;
  constructor(
    private learningPathStore: Store<LearningPathState>,
    private layoutStore: Store<LayoutState>
  ) {}

  ngOnInit() {
    this.initForm();
  }

  showDialog() {
    this.initForm();
    this.display = true;
  }

  onSubmit() {
    if (this.summaryForm.valid) {
      this.layoutStore
        .pipe(
          first(),
          select('layout', 'currentScene')
        )
        .subscribe(currentScene => {
          const learningPath: LearningPath = {
            sceneId: currentScene.value.id,
            name: this.summaryForm.controls['name'].value,
            description: this.summaryForm.controls['description'].value,
            inUse: false,
            targets: []
          };
          this.learningPathStore.dispatch(
            new CreateLearningPath({ learningPath: learningPath })
          );
          this.display = false;
        });
    } else {
      const wrongFields = [];
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
  }
}
