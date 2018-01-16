import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ACAddClinicManagerComponent } from './clinic-manager.component';

describe('ClinicManagerComponent', () => {
  let component: ACAddClinicManagerComponent;
  let fixture: ComponentFixture<ACAddClinicManagerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ACAddClinicManagerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ACAddClinicManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
