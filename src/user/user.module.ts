import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { AuthModule } from '@thallesp/nestjs-better-auth';
import { auth } from 'src/utils/auth';

@Module({
  controllers: [UserController],
})
export class UserModule {}
