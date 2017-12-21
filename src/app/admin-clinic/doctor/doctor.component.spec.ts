import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ACDoctorComponent } from './doctor.component';

describe('DoctorComponent', () => {
  let component: ACDoctorComponent;
  let fixture: ComponentFixture<ACDoctorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ACDoctorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ACDoctorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
