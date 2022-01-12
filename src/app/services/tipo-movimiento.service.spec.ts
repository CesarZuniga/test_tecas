import { TestBed } from '@angular/core/testing';

import { TipoMovimientoService } from './tipo-movimiento.service';

describe('TipoMovimientoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TipoMovimientoService = TestBed.get(TipoMovimientoService);
    expect(service).toBeTruthy();
  });
});
