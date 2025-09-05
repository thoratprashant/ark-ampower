// import type { Route } from "@angular/router"; 

// export const patientRoutes: Route[] = [
//   {
//     path: 'notifications',
//     component: NotificationsComponent,
//     data: { title: 'Notifications' }
//   },
// ]

import { Routes } from '@angular/router';  
import { AppointmentsReferralsComponent } from './appointments-referrals/appointments-referrals.component';
import { AppointmentsComponent } from './appointments/appointments.component';
import { ReferralsComponent } from './referrals/referrals.component';
import { TestsProceduresComponent } from './tests-procedures/tests-procedures.component';

export const appointmentsReferralsRoutes: Routes = [ 
     {
    path: '',
    component: AppointmentsReferralsComponent,
    children: [
      { path: 'appointments', component: AppointmentsComponent },
      { path: 'referrals', component: ReferralsComponent },
      { path: 'tests-procedures', component: TestsProceduresComponent },
      { path: '', redirectTo: 'appointments', pathMatch: 'full' },
    ],
  },
];
