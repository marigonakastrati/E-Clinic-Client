import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ACPharmacyManagerComponent } from './pharmacy-manager.component';

describe('PharmacyManagerComponent', () => {
  let component: ACPharmacyManagerComponent;
  let fixture: ComponentFixture<ACPharmacyManagerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ACPharmacyManagerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ACPharmacyManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
