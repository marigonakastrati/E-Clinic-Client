import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ACEditNurseComponent } from './nurse.component';

describe('NurseComponent', () => {
  let component: ACEditNurseComponent;
  let fixture: ComponentFixture<ACEditNurseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ACEditNurseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ACEditNurseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
