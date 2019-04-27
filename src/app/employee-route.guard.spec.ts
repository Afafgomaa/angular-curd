import { TestBed, async, inject } from '@angular/core/testing';

import { EmployeeRouteGuard } from './employee-route.guard';

describe('EmployeeRouteGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EmployeeRouteGuard]
    });
  });

  it('should ...', inject([EmployeeRouteGuard], (guard: EmployeeRouteGuard) => {
    expect(guard).toBeTruthy();
  }));
});
