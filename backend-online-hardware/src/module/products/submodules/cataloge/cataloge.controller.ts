import { Controller } from '@nestjs/common';
import { CatalogeService } from './cataloge.service';

@Controller('cataloge')
export class CatalogeController {
  constructor(private readonly catalogeService: CatalogeService) {}
}
