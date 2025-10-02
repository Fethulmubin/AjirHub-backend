import { Module } from '@nestjs/common';
import { WirdEntryService } from './wird-entry.service';
import { WirdEntryController } from './wird-entry.controller';
import { PrismaService } from 'src/prisma.service';

@Module({
  controllers: [WirdEntryController],
  providers: [WirdEntryService, PrismaService],
})
export class WirdEntryModule {}
