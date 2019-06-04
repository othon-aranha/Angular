import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaderResourceFormComponent } from './feader-resource-form.component';

describe('HeaderResourceFormComponent', () => {
  let component: FeaderResourceFormComponent;
  let fixture: ComponentFixture<FeaderResourceFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeaderResourceFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeaderResourceFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
