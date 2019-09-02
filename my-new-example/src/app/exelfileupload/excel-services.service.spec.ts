/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ExcelServicesService } from './excel-services.service';

describe('Service: ExcelServices', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ExcelServicesService]
    });
  });

  it('should ...', inject([ExcelServicesService], (service: ExcelServicesService) => {
    expect(service).toBeTruthy();
  }));
});
