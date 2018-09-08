import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TribunalListComponent } from './tribunal-list.component';

describe('TribunalListComponent', () => {
  let component: TribunalListComponent;
  let fixture: ComponentFixture<TribunalListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TribunalListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TribunalListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
