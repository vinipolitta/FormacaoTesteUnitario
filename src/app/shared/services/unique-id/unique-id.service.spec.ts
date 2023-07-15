import { TestBed } from '@angular/core/testing';

import { UniqueIdService } from './unique-id.service';

describe(UniqueIdService.name, () => {
  let service: UniqueIdService = null;

  beforeEach(() => {
    // TestBed.configureTestingModule({});
    service = new UniqueIdService();
  });

  // it('should be created', () => {
  //   expect(service).toBeTruthy();
  // });

  it(`#${UniqueIdService.prototype.genereteUniqueIdWithPrefix.name} should generate id when called with prefix`, () => {
    const id = service.genereteUniqueIdWithPrefix('app');

    //espera-se que contenha "app-" no começo da string usando o startsWith
    expect(id.startsWith('app-')).toBeTrue();
  });

  it(`#${UniqueIdService.prototype.genereteUniqueIdWithPrefix.name} should not generate duplicate IDs when called multiple times`, () => {
    const ids = new Set();
    for (let index = 0; index < 50; index++) {
      ids.add(service.genereteUniqueIdWithPrefix('app)'));
    }
    expect(ids.size).toBe(50);
  });

  it(`#${UniqueIdService.prototype.getNumberGeneratedUniqueIds.name} should return the number of generated IDs when called`, () => {
    service.genereteUniqueIdWithPrefix('app')
    service.genereteUniqueIdWithPrefix('app')
    expect(service.getNumberGeneratedUniqueIds()).toBe(2)
  });

  it(`#${UniqueIdService.prototype.genereteUniqueIdWithPrefix.name} should throw when empty`, () => {
    const emptyValues = [null, undefined, ''];
    emptyValues.forEach(emptyValues => {
      expect(() => service.genereteUniqueIdWithPrefix(emptyValues)).toThrow();
    })
  });




});
