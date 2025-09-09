import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-upload',
  imports: [],
  templateUrl: './upload.component.html',
  styleUrl: './upload.component.scss'
})
export class UploadComponent {
  constructor(public dialogRef: MatDialogRef<UploadComponent>) { }
  closeDialog() {
    this.dialogRef.close();
  }
}
