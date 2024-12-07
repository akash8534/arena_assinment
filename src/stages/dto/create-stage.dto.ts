import { IsString, IsISO8601 } from 'class-validator';

export class CreateStageDto {
  @IsString()
  stage_name: string;

  @IsISO8601()
  time: string;
}
