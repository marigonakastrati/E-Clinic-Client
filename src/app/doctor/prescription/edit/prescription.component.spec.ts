import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DEditPrescriptionComponent } from './prescription.component';

describe('DoctorComponent', () => {
  let component: DEditPrescriptionComponent;
  let fixture: ComponentFixture<DEditPrescriptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DEditPrescriptionComponent]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DEditPrescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
