import { Controller } from '@nestjs/common';
import { OrderPCService } from './order_p_c.service';

@Controller('order-p-c')
export class OrderPCController {
  constructor(private readonly orderPCService: OrderPCService) {}
}
