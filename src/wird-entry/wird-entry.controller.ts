import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
  Req,
  Request,
  UseGuards,
} from '@nestjs/common';
import { WirdEntryService } from './wird-entry.service';
import { CreateWirdEntryDto, UpdateWirdEntryDto } from './DTO';
import {
  AllowAnonymous,
  AuthGuard,
  Session,
} from '@thallesp/nestjs-better-auth';
import type { UserSession } from '@thallesp/nestjs-better-auth';

@Controller('wird-entry')
export class WirdEntryController {
  constructor(private readonly wirdEntryService: WirdEntryService) {}

  // @Get('me')
  // async getProfile(@Session() session: UserSession) {
  //   return session;
  // }

  @Post()
  async create(
    @Session() session: UserSession,
    @Body() dto: CreateWirdEntryDto,
  ) {
    return this.wirdEntryService.createWird({
      ...dto,
      userId: session.user.id
    });
  }

  @Get()
  findAll(@Session() session: UserSession) {
    return this.wirdEntryService.getAllWird(session.user.id);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.wirdEntryService.getWird(id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() dto: UpdateWirdEntryDto) {
    return this.wirdEntryService.updateWird(id, dto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.wirdEntryService.deleteWird(id);
  }
}
