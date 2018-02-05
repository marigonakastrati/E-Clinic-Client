import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ACProfileComponent } from './profile.component';

describe('ProfileComponent', () => {
  let component: ACProfileComponent;
  let fixture: ComponentFixture<ACProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ACProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ACProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
