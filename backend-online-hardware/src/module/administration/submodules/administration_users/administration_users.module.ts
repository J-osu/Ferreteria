import { Module } from '@nestjs/common';
import { AdministrationUsersService } from './administration_users.service';
import { AdministrationUsersController } from './administration_users.controller';

@Module({
  controllers: [AdministrationUsersController],
  providers: [AdministrationUsersService],
})
export class AdministrationUsersModule {}
