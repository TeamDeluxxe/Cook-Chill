import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OwnEventsComponent } from './own-events.component';

describe('OwnEventsComponent', () => {
  let component: OwnEventsComponent;
  let fixture: ComponentFixture<OwnEventsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OwnEventsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OwnEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
