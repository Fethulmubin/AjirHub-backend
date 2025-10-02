import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';
import { WirdEntryService } from './wird-entry.service';
import { CreateWirdEntryDto, UpdateWirdEntryDto } from './DTO';

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

   @Put(':id')
  update(@Param('id') id: string, @Body() dto: UpdateWirdEntryDto) {
    return this.wirdEntryService.updateWird(id, dto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.wirdEntryService.deleteWird(id);
  }

}
