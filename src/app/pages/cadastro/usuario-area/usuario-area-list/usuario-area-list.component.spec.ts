import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuarioAreaListComponent } from './usuario-area-list.component';

describe('UsuarioAreaListComponent', () => {
  let component: UsuarioAreaListComponent;
  let fixture: ComponentFixture<UsuarioAreaListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsuarioAreaListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsuarioAreaListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
