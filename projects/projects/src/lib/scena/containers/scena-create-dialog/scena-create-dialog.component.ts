import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CreateScene } from '../../actions';
import { Store, select } from '@ngrx/store';
import { Scene } from '../../../../api';
import { SceneState } from '../../reducers';
import { Dialog } from 'primeng/dialog';

@Component({
  selector: 'lib-scena-create-dialog',
  templateUrl: './scena-create-dialog.component.html',
  styleUrls: ['./scena-create-dialog.component.scss']
})

export class ScenaCreateDialogComponent implements OnInit {

  @ViewChild('errorDialog')
  errorDialog: Dialog;
  public display: boolean = false;
  summaryForm: FormGroup;
  fileToUpload: File = null;
  TextErrorDialog = "";
  displayErrorDialog = false;
  constructor(private sceneStore: Store<SceneState>) { }

  ngOnInit() {
    this.initForm();
  }

  uploadFile(files: FileList){
    this.fileToUpload = files.item(0);
  }
  
  showDialog() {
      this.initForm();
      this.display = true;
  }

  onSubmit() {
    if(this.summaryForm.valid){
      const scene: Scene = {
        name: this.summaryForm.controls['name'].value,
        description: this.summaryForm.controls['description'].value,
        landmark: this.fileToUpload
      };
      this.sceneStore.dispatch(new CreateScene({ scene: scene}));
      this.display = false;
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
      landmark: new FormControl(null,[Validators.required])
    });
  }

  private readFile(file: File){
    let fileReader = new FileReader();
    fileReader.onload = (e) => {
      console.log(fileReader.result);
    }
    fileReader.readAsText(file);
  }

}