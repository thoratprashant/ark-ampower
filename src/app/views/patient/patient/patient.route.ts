// import type { Route } from "@angular/router"; 

// export const patientRoutes: Route[] = [
//   {
//     path: 'notifications',
//     component: NotificationsComponent,
//     data: { title: 'Notifications' }
//   },
// ]

import { Routes } from '@angular/router';
import { PatientComponent } from './patient.component';

export const patientRoutes: Routes = [
  {
    path: '',
    component: PatientComponent,
    children: [
      {
        path: 'appointments-referrals',
        loadChildren: () =>
          import('../appointments-referrals/appointments-referrals.route')
            .then(m => m.appointmentsReferralsRoutes),
      },
      {
        path: 'my-documents',
        loadChildren: () =>
          import('../my-documents/my-documents.route')
            .then(m => m.myDocumentsRoutes),
      },
    ],
  },
];
