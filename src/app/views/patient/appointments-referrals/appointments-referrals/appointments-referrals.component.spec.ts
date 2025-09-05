import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppointmentsReferralsComponent } from './appointments-referrals.component';

describe('AppointmentsReferralsComponent', () => {
  let component: AppointmentsReferralsComponent;
  let fixture: ComponentFixture<AppointmentsReferralsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppointmentsReferralsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppointmentsReferralsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
