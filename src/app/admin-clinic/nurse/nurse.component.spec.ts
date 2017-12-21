import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ACNurseComponent } from './nurse.component';

describe('NurseComponent', () => {
  let component: ACNurseComponent;
  let fixture: ComponentFixture<ACNurseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ACNurseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ACNurseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
