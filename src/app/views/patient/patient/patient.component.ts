import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-patient',
  imports: [CommonModule, RouterOutlet],
  templateUrl: './patient.component.html',
  styleUrl: './patient.component.scss'
})
export class PatientComponent {

}
