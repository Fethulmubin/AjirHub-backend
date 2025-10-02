import { Module } from '@nestjs/common';
import { WirdEntryService } from './wird-entry.service';
import { WirdEntryController } from './wird-entry.controller';

@Module({
  controllers: [WirdEntryController],
  providers: [WirdEntryService],
})
export class WirdEntryModule {}
