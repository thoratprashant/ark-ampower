import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { UploadComponent } from '../upload/upload.component';

@Component({
  selector: 'app-labs',
  imports: [NgbPaginationModule, CommonModule, MatButtonModule, MatDialogModule],
  templateUrl: './labs.component.html',
  styleUrl: './labs.component.scss'
})
export class LabsComponent {
  page = 5;

  readonly dialog = inject(MatDialog);

  openDialog() {
    const dialogRef = this.dialog.open(UploadComponent, {
      width: '700px',
    });
  }
}
