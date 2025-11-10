import { Controller } from '@nestjs/common';
import { AdministrationPCService } from './administration_p_c.service';

@Controller('administration-p-c')
export class AdministrationPCController {
  constructor(private readonly administrationPCService: AdministrationPCService) {}
}
