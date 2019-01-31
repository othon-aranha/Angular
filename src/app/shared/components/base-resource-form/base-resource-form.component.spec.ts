import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BaseResourceFormComponent } from './base-resource-form.component';

describe('BaseResourceFormComponent', () => {
  let component: BaseResourceFormComponent;
  let fixture: ComponentFixture<BaseResourceFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BaseResourceFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BaseResourceFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
