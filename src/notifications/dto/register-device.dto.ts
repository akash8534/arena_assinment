import { IsString } from 'class-validator';

export class RegisterDeviceDto {
  @IsString()
  device_token: string;
}
