import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ACPharmacistComponent } from './pharmacist.component';

describe('PharmacistComponent', () => {
  let component: ACPharmacistComponent;
  let fixture: ComponentFixture<ACPharmacistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ACPharmacistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ACPharmacistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
