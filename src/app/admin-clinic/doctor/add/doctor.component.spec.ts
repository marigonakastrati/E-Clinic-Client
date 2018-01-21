import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ACAddDoctorComponent } from './doctor.component';

describe('DoctorComponent', () => {
  let component: ACAddDoctorComponent;
  let fixture: ComponentFixture<ACAddDoctorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ACAddDoctorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ACAddDoctorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
