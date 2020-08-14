import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuarioAreaFormComponent } from './usuario-area-form.component';

describe('UsuarioAreaFormComponent', () => {
  let component: UsuarioAreaFormComponent;
  let fixture: ComponentFixture<UsuarioAreaFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsuarioAreaFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsuarioAreaFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
