import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateAppointmentReqModalComponent } from './create-appointment-req-modal.component';

describe('CreateAppointmentReqModalComponent', () => {
  let component: CreateAppointmentReqModalComponent;
  let fixture: ComponentFixture<CreateAppointmentReqModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateAppointmentReqModalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateAppointmentReqModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
