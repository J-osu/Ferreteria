import { Test, TestingModule } from '@nestjs/testing';
import { OrderProcessService } from './order_process.service';

describe('OrderProcessService', () => {
  let service: OrderProcessService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [OrderProcessService],
    }).compile();

    service = module.get<OrderProcessService>(OrderProcessService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
