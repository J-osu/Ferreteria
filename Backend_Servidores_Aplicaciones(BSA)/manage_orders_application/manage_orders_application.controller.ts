import { Controller } from '@nestjs/common';
import { ManageOrdersApplicationService } from './manage_orders_application.service';

@Controller('manage-orders-application')
export class ManageOrdersApplicationController {
  constructor(private readonly manageOrdersApplicationService: ManageOrdersApplicationService) {}
}
