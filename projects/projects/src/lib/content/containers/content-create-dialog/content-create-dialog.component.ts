import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CreateContent } from '../../actions';
import { Store, select } from '@ngrx/store';
import { Content } from '../../../../api';
import { ContentState } from '../../reducers';
import { Dialog } from 'primeng/dialog';
import { first } from 'rxjs/operators';
import {State as LayoutState} from 'src/app/store/layout-store/reducer';
import { FileUpload } from 'primeng/fileupload';

@Component({
  selector: 'lib-content-create-dialog',
  templateUrl: './content-create-dialog.component.html',
  styleUrls: ['./content-create-dialog.component.scss']
})

export class ContentCreateDialogComponent implements OnInit {

  @ViewChild('errorDialog')
  errorDialog: Dialog;

  @ViewChild('fileUpload')
  uploadFile: FileUpload;

  chooseLabel = "Choose file to import";

  public display: boolean = false;
  summaryForm: FormGroup;
  TextErrorDialog = "";
  displayErrorDialog = false;
  constructor(
    private contentStore: Store<ContentState>,
    private layoutStore: Store<LayoutState>,
    ) {
   
     }

  ngOnInit() {
    this.initForm();
  }
  
  showDialog() {
      this.uploadFile.clear();
      this.initForm();
      this.display = true;
  }

  onSubmit() {
    if(this.summaryForm.valid && this.uploadFile.files.length > 0){
       
     this.layoutStore.pipe(first(), select('layout', 'currentScene'))
     .subscribe( currentScene => {
        const content: Content = {
          sceneId: currentScene.value.id,
          name: this.summaryForm.controls['name'].value,
          description: this.summaryForm.controls['description'].value,
          file: this.uploadFile.files[0]
        };
        console.log(content);
        this.contentStore.dispatch(new CreateContent({ content: content}));
        this.display = false;
      });
    }
    else {
      let wrongFields = [];
      if(this.uploadFile.files.length === 0) {
        wrongFields.push('file');
      }
      Object.keys(this.summaryForm.controls).forEach(
        key => {
          if(this.summaryForm.controls[key].status === 'INVALID'){
            wrongFields.push(key);
          }
        }
      )
      if (wrongFields.length > 1) {
        this.TextErrorDialog = "The following fields are required : \n";
        wrongFields.forEach( item => this.TextErrorDialog += item + " ");
      }
      else {
        this.TextErrorDialog = "The following field is required : " + wrongFields[0];
      }
      this.displayErrorDialog = true;
    }
  }

  private initForm(){
    this.summaryForm = new FormGroup({
      name: new FormControl('', [
        Validators.required,
        Validators.minLength(0),
        Validators.maxLength(20)
      ]),
      description: new FormControl(''),
    });
  }

}