import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ACHRManagerComponent } from './hr-manager.component';

describe('ClinicManagerComponent', () => {
  let component: ACHRManagerComponent;
  let fixture: ComponentFixture<ACHRManagerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ACHRManagerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ACHRManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
