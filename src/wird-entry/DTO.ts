// create-wird-entry.dto.ts
import { IsString, IsOptional, IsInt, IsDateString } from 'class-validator';
import { PartialType } from '@nestjs/mapped-types';

export class CreateWirdEntryDto {
  @IsInt()
  count: number;

  @IsOptional()
  @IsString()
  surah?: string;

  @IsOptional()
  @IsString()
  note?: string;

  // @IsDateString()
  date: string;

  @IsString()
  userId: string; // you might later replace this with auth context
}
// update-wird-entry.dto.ts

export class UpdateWirdEntryDto extends PartialType(CreateWirdEntryDto) {}