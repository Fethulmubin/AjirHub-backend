import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaService } from './prisma.service';
import { UserModule } from './user/user.module';
import { WirdEntryModule } from './wird-entry/wird-entry.module';
import { AuthModule } from '@thallesp/nestjs-better-auth';
import { auth } from './utils/auth';

@Module({
  imports: [UserModule, WirdEntryModule, AuthModule.forRoot({
        auth
      })],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
