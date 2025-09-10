import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core'; 
import { NgbNavModule, NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { CreateAppointmentReqModalComponent } from '../create-appointment-req-modal/create-appointment-req-modal.component';
import {MatButtonModule} from '@angular/material/button';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';

interface Visit {
  datetime: string;
  time: string;
  provider: { name: string; avatar: string };
  type: string;
  procedure: string;
  location: string;
  status: { text: string; type: string }; // one badge
  actions: { icon: string; type: string }[]; // one or many buttons
}

@Component({
  selector: 'app-appointments',
  imports: [NgbNavModule, CommonModule,MatButtonModule, MatDialogModule, NgbPaginationModule],
  templateUrl: './appointments.component.html',
  styleUrl: './appointments.component.scss'
})
export class AppointmentsComponent {
  // appointmentGroups = [
  //   {
  //     day: 'Today',
  //     appointments: [
  //       {
  //         doctor: 'Dr. Emily Davis',
  //         specialty: 'Primary Care Visit',
  //         date: 'Sun, Aug 24, 2025',
  //         time: '8:30 AM (30 min)',
  //         mode: 'In Person',
  //         address: '47 W 13th St, New York, NY 10011',
  //         reason: 'Annual Physical & Follow-up on Labs',
  //         status: 'Scheduled',
  //         nextSteps: [
  //           { type: 'blue', label: 'Complete Medical History Form', button: 'Start Now' },
  //           { type: 'orange', label: 'Upload Insurance Card', button: 'Upload' },
  //           { type: 'green', label: 'Copay Due: $25', link: 'View Billing Summary', button: 'Pay Now' }
  //         ],
  //         visitPrep: {
  //           instructions: 'Bring ID and Insurance Card',
  //           pdf: 'Pre-Visit Instructions PDF',
  //           transport: 'Yes',
  //           arrive: 'Arrive 15 minutes early',
  //           interpreter: 'No'
  //         },
  //         provider: {
  //           name: 'Dr. Emily Davis, MD – Internal Medicine',
  //           phone: '(555) 555-1234',
  //           clinic: 'AMHealth Primary Care Clinic',
  //           address: '47 W 13th St, New York, NY 10011'
  //         },
  //         footerButtons: [
  //           { label: 'Confirm Appointment', style: 'btn btn-primary dark-primary' },
  //           { label: 'Cancel', style: 'btn btn-light' },
  //           { label: 'Reschedule', style: 'btn btn-warning' },
  //           { label: 'Message Care Navigator', style: 'btn btn-info' }
  //         ]
  //       }
  //     ]
  //   },
  //   {
  //     day: 'This Week',
  //     appointments: [
  //       {
  //         doctor: 'Dr. John Smith',
  //         specialty: 'Dermatology Consultation',
  //         date: 'Mon, Aug 25, 2025',
  //         time: '10:00 AM (20 min)',
  //         mode: 'Virtual',
  //         address: 'Zoom Link',
  //         reason: 'Skin Rash Follow-up',
  //         status: 'Completed',
  //         nextSteps: [
  //           { type: 'blue', label: 'Upload Lab Report', button: 'Upload' },
  //           { type: 'green', label: 'Copay Due: $25', link: 'View Billing Summary', button: 'Pay Now' }
  //         ],
  //         visitPrep: {
  //           instructions: 'Ensure good lighting for camera',
  //           pdf: '',
  //           transport: 'N/A',
  //           arrive: 'Join 5 minutes early',
  //           interpreter: 'No'
  //         },
  //         provider: {
  //           name: 'Dr. John Smith, MD – Dermatology',
  //           phone: '(555) 555-6789',
  //           clinic: 'Skin Health Clinic',
  //           address: 'Virtual'
  //         },
  //         footerButtons: [
  //           { label: 'Confirm Appointment', style: 'btn btn-primary dark-primary' },
  //           { label: 'Cancel', style: 'btn btn-light' },
  //           { label: 'Reschedule', style: 'btn btn-warning' },
  //           { label: 'Message Care Navigator', style: 'btn btn-info' }
  //         ]
  //       },
  //       {
  //         doctor: 'Dr. John Smith',
  //         specialty: 'Dermatology Consultation',
  //         date: 'Mon, Aug 25, 2025',
  //         time: '10:00 AM (20 min)',
  //         mode: 'Virtual',
  //         address: 'Zoom Link',
  //         reason: 'Skin Rash Follow-up',
  //         status: 'Completed',
  //         nextSteps: [
  //           { type: 'blue', label: 'Upload Lab Report', button: 'Upload' },
  //           { type: 'green', label: 'Copay Due: $25', link: 'View Billing Summary', button: 'Pay Now' }
  //         ],
  //         visitPrep: {
  //           instructions: 'Ensure good lighting for camera',
  //           pdf: '',
  //           transport: 'N/A',
  //           arrive: 'Join 5 minutes early',
  //           interpreter: 'No'
  //         },
  //         provider: {
  //           name: 'Dr. John Smith, MD – Dermatology',
  //           phone: '(555) 555-6789',
  //           clinic: 'Skin Health Clinic',
  //           address: 'Virtual'
  //         },
  //         footerButtons: [
  //           { label: 'Confirm Appointment', style: 'btn btn-primary dark-primary' },
  //           { label: 'Cancel', style: 'btn btn-light' },
  //           { label: 'Reschedule', style: 'btn btn-warning' },
  //           { label: 'Message Care Navigator', style: 'btn btn-info' }
  //         ]
  //       }
  //     ]
  //   }
  // ];
   
  readonly dialog = inject(MatDialog);

  openDialog() {
    const dialogRef = this.dialog.open(CreateAppointmentReqModalComponent); 
  }

   visits: Visit[] = [
    {
      datetime: 'Jul 29, 2025',
      time: '11:15 AM',
      provider: { name: 'Dr. Emily Davis', avatar: 'assets/images/users/avatar-1.jpg' },
      type: 'Virtual',
      procedure: 'Blood tests check for health problems',
      location: '47 W 13th St, New York, NY 10011, USA',
      status: { text: 'Completed', type: 'blue-dark' },
      actions: [
        { icon: 'ti-eye', type: 'primary' },
        { icon: 'ti-download', type: 'primary' },
      ],
    },
    {
      datetime: 'Jul 28, 2025',
      time: '02:45 PM',
      provider: { name: 'Dr. John Smith', avatar: 'assets/images/users/avatar-2.jpg' },
      type: 'In-person',
      procedure: 'X-ray chest screening',
      location: 'Apollo Hospital, New Delhi, India',
      status: { text: 'Pending', type: 'blue-light' },
      actions: [
        { icon: 'ti-share-3', type: 'success' },
      ],
    },
    {
      datetime: 'Jul 26, 2025',
      time: '09:00 AM',
      provider: { name: 'Dr. Anita Kapoor', avatar: 'assets/images/users/avatar-1.jpg' },
      type: 'Virtual',
      procedure: 'General health consultation',
      location: 'Online',
      status: { text: 'Rejected', type: 'red-light' },
      actions: [
        { icon: 'ti-trash', type: 'danger' },
      ],
    },
  ];

  // Pagination
  page = 1;
  pageSize = 2;

  get pagedVisits(): Visit[] {
    const start = (this.page - 1) * this.pageSize;
    return this.visits.slice(start, start + this.pageSize);
  }
  
}
