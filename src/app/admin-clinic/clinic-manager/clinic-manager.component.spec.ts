import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ACClinicManagerComponent } from './clinic-manager.component';

describe('ClinicManagerComponent', () => {
  let component: ACClinicManagerComponent;
  let fixture: ComponentFixture<ACClinicManagerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ACClinicManagerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ACClinicManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
