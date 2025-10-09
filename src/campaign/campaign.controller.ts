import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { CampaignService } from './campaign.service';
import { CreateCampaignDto } from './dto/create-campaign.dto';
import { UpdateCampaignDto } from './dto/update-campaign.dto';
import type { UserSession } from '@thallesp/nestjs-better-auth';
import { Session } from '@thallesp/nestjs-better-auth';

@Controller('campaign')
export class CampaignController {
  constructor(private readonly campaignService: CampaignService) {}

  @Post()
  create(
    @Body() createCampaignDto: CreateCampaignDto,
    @Session() session: UserSession,
  ) {
    return this.campaignService.createCampaign({
      ...createCampaignDto,
      ownerId: session.user.id,
    });
  }

  @Get()
  findAll() {
    return this.campaignService.findAllCampaigns();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.campaignService.findCampaignById(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateCampaignDto: UpdateCampaignDto,
  ) {
    return this.campaignService.updateCampaign(id, updateCampaignDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.campaignService.removeCampaign(id);
  }
}
