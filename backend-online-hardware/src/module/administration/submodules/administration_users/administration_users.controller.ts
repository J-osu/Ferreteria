import { Controller } from '@nestjs/common';
import { AdministrationUsersService } from './administration_users.service';

@Controller('administration-users')
export class AdministrationUsersController {
  constructor(private readonly administrationUsersService: AdministrationUsersService) {}
}
