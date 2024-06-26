import { Component, Inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Result } from '../models/result.model';
import { FirestoreService } from 'src/app/services/firestore.service';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent {
  public formGroup: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<DialogComponent>,
    public formBuilder: FormBuilder,
    private fireService: FirestoreService,
    @Inject(MAT_DIALOG_DATA) public data: Result
  ) {
    this.formGroup = this.formBuilder.group({
      home_name: new FormControl(''),
      home_score: new FormControl(''),
      away_name: new FormControl(''),
      away_score: new FormControl(''),
      home_image: new FormControl(''),
      away_image: new FormControl('')
    });
    if (this.data) {
      this.patchForm();
    }
  }

  patchForm() {
    this.formGroup.patchValue({
      home_name: this.data.homeName,
      home_score: this.data.homeScore,
      away_name: this.data.awayName,
      away_score: this.data.awayScore,
      home_image: this.data.homeImage,
      away_image:this.data.awayImage
    })
  }

  onSave() {
    const result: Result = {
      homeName: this.formGroup.get('home_name')?.value,
      homeScore: parseInt(this.formGroup.get('home_score')?.value),
      awayName: this.formGroup.get('away_name')?.value,
      awayScore: parseInt(this.formGroup.get('away_score')?.value),
      homeImage: this.formGroup.get('home_image')?.value,
      awayImage: this.formGroup.get('away_image')?.value,
      id: !!this.data?.id ? this.data.id : '' 
    }
    if (this.data) {
      this.fireService.updateResult(result);
    } else {
      this.fireService.addNewResult(result);
    }
    this.dialogRef.close();
  }

  onCancel() {
    this.dialogRef.close();
  }
}
