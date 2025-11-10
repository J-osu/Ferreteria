import { Module } from '@nestjs/common';
import { OrderProcessService } from './order_process.service';
import { OrderProcessController } from './order_process.controller';

@Module({
  controllers: [OrderProcessController],
  providers: [OrderProcessService],
})
export class OrderProcessModule {}
