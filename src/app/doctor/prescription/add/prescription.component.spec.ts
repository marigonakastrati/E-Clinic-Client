import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DAddPrescriptionComponent } from './prescription.component';

describe('PrescriptionComponent', () => {
  let component: DAddPrescriptionComponent;
  let fixture: ComponentFixture<DAddPrescriptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DAddPrescriptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DAddPrescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
