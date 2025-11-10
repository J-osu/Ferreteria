import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
  @Get('/users')
  getUser(): any {
    return [
      { id: 1, nombre: 'Usuario1' },
      { id: 2, nombre: 'Usuario2' },
    ];
  }
}
