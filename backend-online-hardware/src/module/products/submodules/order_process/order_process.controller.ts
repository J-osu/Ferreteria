import { Controller } from '@nestjs/common';
import { OrderProcessService } from './order_process.service';

@Controller('order-process')
export class OrderProcessController {
  constructor(private readonly orderProcessService: OrderProcessService) {}
}
