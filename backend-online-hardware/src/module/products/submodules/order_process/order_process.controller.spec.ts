import { Test, TestingModule } from '@nestjs/testing';
import { OrderProcessController } from './order_process.controller';
import { OrderProcessService } from './order_process.service';

describe('OrderProcessController', () => {
  let controller: OrderProcessController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [OrderProcessController],
      providers: [OrderProcessService],
    }).compile();

    controller = module.get<OrderProcessController>(OrderProcessController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
