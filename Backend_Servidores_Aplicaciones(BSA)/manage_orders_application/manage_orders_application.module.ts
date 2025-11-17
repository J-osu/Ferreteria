import { Module } from '@nestjs/common';
import { ManageOrdersApplicationService } from './manage_orders_application.service';
import { ManageOrdersApplicationController } from './manage_orders_application.controller';

@Module({
  controllers: [ManageOrdersApplicationController],
  providers: [ManageOrdersApplicationService],
})
export class ManageOrdersApplicationModule {}
