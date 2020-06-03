import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrationForEventComponent } from './registration-for-event.component';

describe('RegistrationForEventComponent', () => {
  let component: RegistrationForEventComponent;
  let fixture: ComponentFixture<RegistrationForEventComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistrationForEventComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrationForEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
