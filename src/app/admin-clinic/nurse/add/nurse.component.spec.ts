import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ACAddNurseComponent } from './nurse.component';

describe('NurseComponent', () => {
  let component: ACAddNurseComponent;
  let fixture: ComponentFixture<ACAddNurseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ACAddNurseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ACAddNurseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
