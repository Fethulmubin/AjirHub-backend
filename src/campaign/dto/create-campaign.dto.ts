import { IsString, IsOptional, IsInt, IsDateString, Min } from 'class-validator';

export class CreateCampaignDto {
  @IsString()
  ownerId: string; // the creator of the campaign

  @IsString()
  title: string;

  @IsOptional()
  @IsString()
  description?: string;

  @IsInt()
  @Min(1)
  targetCount: number;

  @IsOptional()
  @IsInt()
  maxContributors?: number;

  @IsOptional()
  @IsDateString()
  expiresAt?: string; // optional end date
}

