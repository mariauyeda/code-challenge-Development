import { TestBed, inject } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { DoctorService } from './doctor.service';

describe('DoctorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DoctorService],
      imports: [
        HttpClientModule
      ]
    });
  });

  it('should be created', inject([DoctorService], (service: DoctorService) => {
    expect(service).toBeTruthy();
  }));
});
