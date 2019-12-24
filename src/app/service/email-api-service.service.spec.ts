import { TestBed } from '@angular/core/testing';

import { EmailApiServiceService } from './email-api-service.service';


describe('EmailApiServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EmailApiServiceService = TestBed.get(EmailApiServiceService);
    expect(service).toBeTruthy();
  });
});
