import { TestBed } from '@angular/core/testing';

import { WeatherAttireServiceService } from './weather-attire-service.service';

describe('WeatherAttireServiceService', () => {
  let service: WeatherAttireServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WeatherAttireServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
