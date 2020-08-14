import { TestBed } from '@angular/core/testing';

import { UsuarioAreaService } from './usuario-area.service';

describe('UsuarioAreaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UsuarioAreaService = TestBed.get(UsuarioAreaService);
    expect(service).toBeTruthy();
  });
});
