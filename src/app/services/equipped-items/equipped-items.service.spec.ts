import { TestBed } from '@angular/core/testing';

import { EquippedItemsService } from './equipped-items.service';

describe('EquippedItemsService', () => {
  let service: EquippedItemsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EquippedItemsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
