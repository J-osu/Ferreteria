import { Test, TestingModule } from '@nestjs/testing';
import { OrderPCController } from './order_p_c.controller';
import { OrderPCService } from './order_p_c.service';

describe('OrderPCController', () => {
  let controller: OrderPCController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [OrderPCController],
      providers: [OrderPCService],
    }).compile();

    controller = module.get<OrderPCController>(OrderPCController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
