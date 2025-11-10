import { Controller } from '@nestjs/common';
import { ProfileUserService } from './profile_user.service';

@Controller('profile-user')
export class ProfileUserController {
  constructor(private readonly profileUserService: ProfileUserService) {}
}
