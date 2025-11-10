import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { LoginModule } from './submodules/login/login.module';
import { LoginController } from './submodules/login/login.controller';
import { LoginService } from './submodules/login/login.service';

@Module({
  imports: [LoginModule],
  controllers: [UsersController, LoginController],
  providers: [UsersService, LoginService],
})
export class UsersModule {}
