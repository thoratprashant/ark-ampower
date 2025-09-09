import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core'; 
import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
import { CreateAppointmentReqModalComponent } from '../create-appointment-req-modal/create-appointment-req-modal.component';
import {MatButtonModule} from '@angular/material/button';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';

@Component({
  selector: 'app-appointments',
  imports: [NgbNavModule, CommonModule,MatButtonModule, MatDialogModule],
  templateUrl: './appointments.component.html',
  styleUrl: './appointments.component.scss'
})
export class AppointmentsComponent {
  appointmentGroups = [
    {
      day: 'Today',
      appointments: [
        {
          doctor: 'Dr. Emily Davis',
          specialty: 'Primary Care Visit',
          date: 'Sun, Aug 24, 2025',
          time: '8:30 AM (30 min)',
          mode: 'In Person',
          address: '47 W 13th St, New York, NY 10011',
          reason: 'Annual Physical & Follow-up on Labs',
          status: 'Scheduled',
          nextSteps: [
            { type: 'blue', label: 'Complete Medical History Form', button: 'Start Now' },
            { type: 'orange', label: 'Upload Insurance Card', button: 'Upload' },
            { type: 'green', label: 'Copay Due: $25', link: 'View Billing Summary', button: 'Pay Now' }
          ],
          visitPrep: {
            instructions: 'Bring ID and Insurance Card',
            pdf: 'Pre-Visit Instructions PDF',
            transport: 'Yes',
            arrive: 'Arrive 15 minutes early',
            interpreter: 'No'
          },
          provider: {
            name: 'Dr. Emily Davis, MD – Internal Medicine',
            phone: '(555) 555-1234',
            clinic: 'AMHealth Primary Care Clinic',
            address: '47 W 13th St, New York, NY 10011'
          },
          footerButtons: [
            { label: 'Confirm Appointment', style: 'btn btn-primary dark-primary' },
            { label: 'Cancel', style: 'btn btn-light' },
            { label: 'Reschedule', style: 'btn btn-warning' },
            { label: 'Message Care Navigator', style: 'btn btn-info' }
          ]
        }
      ]
    },
    {
      day: 'This Week',
      appointments: [
        {
          doctor: 'Dr. John Smith',
          specialty: 'Dermatology Consultation',
          date: 'Mon, Aug 25, 2025',
          time: '10:00 AM (20 min)',
          mode: 'Virtual',
          address: 'Zoom Link',
          reason: 'Skin Rash Follow-up',
          status: 'Completed',
          nextSteps: [
            { type: 'blue', label: 'Upload Lab Report', button: 'Upload' },
            { type: 'green', label: 'Copay Due: $25', link: 'View Billing Summary', button: 'Pay Now' }
          ],
          visitPrep: {
            instructions: 'Ensure good lighting for camera',
            pdf: '',
            transport: 'N/A',
            arrive: 'Join 5 minutes early',
            interpreter: 'No'
          },
          provider: {
            name: 'Dr. John Smith, MD – Dermatology',
            phone: '(555) 555-6789',
            clinic: 'Skin Health Clinic',
            address: 'Virtual'
          },
          footerButtons: [
            { label: 'Confirm Appointment', style: 'btn btn-primary dark-primary' },
            { label: 'Cancel', style: 'btn btn-light' },
            { label: 'Reschedule', style: 'btn btn-warning' },
            { label: 'Message Care Navigator', style: 'btn btn-info' }
          ]
        },
        {
          doctor: 'Dr. John Smith',
          specialty: 'Dermatology Consultation',
          date: 'Mon, Aug 25, 2025',
          time: '10:00 AM (20 min)',
          mode: 'Virtual',
          address: 'Zoom Link',
          reason: 'Skin Rash Follow-up',
          status: 'Completed',
          nextSteps: [
            { type: 'blue', label: 'Upload Lab Report', button: 'Upload' },
            { type: 'green', label: 'Copay Due: $25', link: 'View Billing Summary', button: 'Pay Now' }
          ],
          visitPrep: {
            instructions: 'Ensure good lighting for camera',
            pdf: '',
            transport: 'N/A',
            arrive: 'Join 5 minutes early',
            interpreter: 'No'
          },
          provider: {
            name: 'Dr. John Smith, MD – Dermatology',
            phone: '(555) 555-6789',
            clinic: 'Skin Health Clinic',
            address: 'Virtual'
          },
          footerButtons: [
            { label: 'Confirm Appointment', style: 'btn btn-primary dark-primary' },
            { label: 'Cancel', style: 'btn btn-light' },
            { label: 'Reschedule', style: 'btn btn-warning' },
            { label: 'Message Care Navigator', style: 'btn btn-info' }
          ]
        }
      ]
    }
  ];
   
  readonly dialog = inject(MatDialog);

  openDialog() {
    const dialogRef = this.dialog.open(CreateAppointmentReqModalComponent);
 
  }
}
