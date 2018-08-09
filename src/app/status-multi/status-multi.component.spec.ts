import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StatusMultiComponent } from './status-multi.component';

describe('StatusMultiComponent', () => {
  let component: StatusMultiComponent;
  let fixture: ComponentFixture<StatusMultiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StatusMultiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatusMultiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
