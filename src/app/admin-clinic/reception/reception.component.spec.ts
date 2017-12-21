import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ACReceptionComponent } from './reception.component';

describe('ReceptionComponent', () => {
  let component: ACReceptionComponent;
  let fixture: ComponentFixture<ACReceptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ACReceptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ACReceptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
