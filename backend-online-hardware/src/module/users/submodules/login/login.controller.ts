import { Controller, Get } from '@nestjs/common';
import { LoginService } from './login.service';

@Controller('login')
export class LoginController {
  //With  this injected in the controller
  constructor(private readonly loginService: LoginService) {}

  @Get()
  getAll() {
    return 'Login works!';
  }
}
