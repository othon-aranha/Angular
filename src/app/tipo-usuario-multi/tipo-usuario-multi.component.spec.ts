import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TipoUsuarioMultiComponent } from './tipo-usuario-multi.component';

describe('TipoUsuarioMultiComponent', () => {
  let component: TipoUsuarioMultiComponent;
  let fixture: ComponentFixture<TipoUsuarioMultiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TipoUsuarioMultiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TipoUsuarioMultiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
