import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DViewPatientComponent } from './patient.component';

describe('PatientComponent', () => {
  let component: DViewPatientComponent;
  let fixture: ComponentFixture<DViewPatientComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DViewPatientComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DViewPatientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
