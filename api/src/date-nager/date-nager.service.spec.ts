import { Test, TestingModule } from '@nestjs/testing';
import { DateNagerService } from './date-nager.service';

describe('DateNagerService', () => {
  let service: DateNagerService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DateNagerService],
    }).compile();

    service = module.get<DateNagerService>(DateNagerService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
