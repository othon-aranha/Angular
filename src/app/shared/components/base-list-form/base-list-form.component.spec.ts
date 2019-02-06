import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BaseListFormComponent } from './base-list-form.component';

describe('BaseListFormComponent', () => {
  let component: BaseListFormComponent;
  let fixture: ComponentFixture<BaseListFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BaseListFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BaseListFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
