import { Module } from '@nestjs/common';
import { ProfileUserService } from './profile_user.service';
import { ProfileUserController } from './profile_user.controller';

@Module({
  controllers: [ProfileUserController],
  providers: [ProfileUserService],
})
export class ProfileUserModule {}
