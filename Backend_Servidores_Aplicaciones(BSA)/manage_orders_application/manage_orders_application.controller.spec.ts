import { Test, TestingModule } from '@nestjs/testing';
import { ManageOrdersApplicationController } from './manage_orders_application.controller';
import { ManageOrdersApplicationService } from './manage_orders_application.service';

describe('ManageOrdersApplicationController', () => {
  let controller: ManageOrdersApplicationController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ManageOrdersApplicationController],
      providers: [ManageOrdersApplicationService],
    }).compile();

    controller = module.get<ManageOrdersApplicationController>(ManageOrdersApplicationController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
