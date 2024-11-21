import { Test, TestingModule } from '@nestjs/testing';
import { CountriesNowService } from './countries-now.service';

describe('CountriesNowService', () => {
  let service: CountriesNowService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CountriesNowService],
    }).compile();

    service = module.get<CountriesNowService>(CountriesNowService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
