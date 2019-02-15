import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModuloFormComponent } from './modulo-form.component';

describe('ModuloFormComponentComponent', () => {
  let component: ModuloFormComponent;
  let fixture: ComponentFixture<ModuloFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModuloFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModuloFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
