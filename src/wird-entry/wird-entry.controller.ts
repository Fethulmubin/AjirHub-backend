import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { WirdEntryService } from './wird-entry.service';
import { CreateWirdEntryDto } from './DTO';

@Controller('wird-entry')
export class WirdEntryController {
  constructor(private readonly wirdEntryService: WirdEntryService) {}

  @Post()
  async create(@Body() body: CreateWirdEntryDto ){
    return this.wirdEntryService.createWird(body);
  }

  @Get()
  findAll(@Query('userId') userId?: string) {
    return this.wirdEntryService.getAllWird(userId);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.wirdEntryService.getWird(id);
  }

}
