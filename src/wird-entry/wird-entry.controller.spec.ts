import { Test, TestingModule } from '@nestjs/testing';
import { WirdEntryController } from './wird-entry.controller';
import { WirdEntryService } from './wird-entry.service';

describe('WirdEntryController', () => {
  let controller: WirdEntryController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [WirdEntryController],
      providers: [WirdEntryService],
    }).compile();

    controller = module.get<WirdEntryController>(WirdEntryController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
