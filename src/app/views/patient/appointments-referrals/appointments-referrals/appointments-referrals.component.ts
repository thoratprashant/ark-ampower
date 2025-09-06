import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-appointments-referrals',
  imports: [CommonModule, RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './appointments-referrals.component.html',
  styleUrl: './appointments-referrals.component.scss'
})
export class AppointmentsReferralsComponent {

}
