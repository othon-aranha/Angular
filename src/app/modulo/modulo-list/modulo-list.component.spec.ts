import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModuloListComponent } from './modulo-list.component';

describe('ModuloListComponent', () => {
  let component: ModuloListComponent;
  let fixture: ComponentFixture<ModuloListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModuloListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModuloListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
