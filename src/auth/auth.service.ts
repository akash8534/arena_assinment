import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
  login(username: string, password: string) {
    return {
      access_token: 'mockAccessToken',
      refresh_token: 'mockRefreshToken',
      token_type: 'Bearer',
      expires_in: 3600,
    };
  }
}
