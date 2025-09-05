import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestsProceduresComponent } from './tests-procedures.component';

describe('TestsProceduresComponent', () => {
  let component: TestsProceduresComponent;
  let fixture: ComponentFixture<TestsProceduresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestsProceduresComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestsProceduresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
