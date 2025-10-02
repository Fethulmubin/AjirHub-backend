import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaService } from './prisma.service';
import { UserModule } from './user/user.module';
import { WirdEntryModule } from './wird-entry/wird-entry.module';

@Module({
  imports: [UserModule, WirdEntryModule],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
