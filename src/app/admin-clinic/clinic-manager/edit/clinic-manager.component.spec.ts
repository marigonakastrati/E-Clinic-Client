import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ACEditClinicManagerComponent } from './clinic-manager.component';

describe('ClinicManagerComponent', () => {
  let component: ACEditClinicManagerComponent;
  let fixture: ComponentFixture<ACEditClinicManagerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ACEditClinicManagerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ACEditClinicManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
