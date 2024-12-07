import { Injectable } from '@nestjs/common';

@Injectable()
export class NotificationsService {
  registerDevice(deviceToken: string) {
    return { message: 'Device registered for notifications.' };
  }
}
