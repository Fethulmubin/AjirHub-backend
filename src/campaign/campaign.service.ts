import { Injectable } from '@nestjs/common';
import { CreateCampaignDto } from './dto/create-campaign.dto';
import { UpdateCampaignDto } from './dto/update-campaign.dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class CampaignService {
  constructor(private readonly prisma: PrismaService) {}
  createCampaign(createCampaignDto: CreateCampaignDto) {
    return this.prisma.campaign.create({
      data: createCampaignDto,
    });
  }

  findAllCampaigns() {
    return this.prisma.campaign.findMany();
  }

  findCampaignById(id: string) {
    return this.prisma.campaign.findUnique({
      where: {
        id,
      },
    });
  }

  updateCampaign(id: string, updateCampaignDto: UpdateCampaignDto) {
    return this.prisma.campaign.update({
      where: { id },
      data: updateCampaignDto,
    });
  }

  removeCampaign(id: string) {
    return this.prisma.campaign.delete({
      where: { id },
    });
  }
}
