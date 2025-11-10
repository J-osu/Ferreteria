import { Controller, Get } from '@nestjs/common';
import { LoginService } from './login.service';

@Controller('/auth')
export class LoginController {
  //With  this injected in the controller
  constructor(private readonly loginService: LoginService) {}

  @Get('login')
  getLogin() {
    return 'Login works en funcionamiento!';
  }
  @Get('logout')
  getLogout() {
    return 'Logout works!';
  }
  @Get('register')
  getRegister() {
    return 'Register works!';
  }
}
