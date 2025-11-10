import { Module } from '@nestjs/common';
import { AdministrationPCService } from './administration_p_c.service';
import { AdministrationPCController } from './administration_p_c.controller';

@Module({
  controllers: [AdministrationPCController],
  providers: [AdministrationPCService],
})
export class AdministrationPCModule {}
