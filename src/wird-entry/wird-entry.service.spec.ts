import { Test, TestingModule } from '@nestjs/testing';
import { WirdEntryService } from './wird-entry.service';

describe('WirdEntryService', () => {
  let service: WirdEntryService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [WirdEntryService],
    }).compile();

    service = module.get<WirdEntryService>(WirdEntryService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
