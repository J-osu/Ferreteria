import { Controller, Get } from '@nestjs/common';
import { ProfileUserService } from './profile_user.service';

@Controller('/profile')
export class ProfileUserController {
  constructor(private readonly profileUserService: ProfileUserService) {}
  @Get('info')
  getProfileInfo() {
    return 'Information of Profile User works!';
  }
  @Get('settings')
  getProfileSettings() {
    return 'Menu of Profile User settings works!';
  }
  @Get('history')
  getProfileHistory() {
    return 'History of ordered products works!';
  }
  @Get('delete')
  deleteProfile() {
    return 'Profile User deleted!';
  }
}
