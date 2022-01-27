import { TestBed } from '@angular/core/testing';

import { SenderContactService } from './sender-contact.service';

describe('SenderService', () => {
  let service: SenderContactService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SenderContactService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
