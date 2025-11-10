import { Test, TestingModule } from '@nestjs/testing';
import { OrderPCService } from './order_p_c.service';

describe('OrderPCService', () => {
  let service: OrderPCService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [OrderPCService],
    }).compile();

    service = module.get<OrderPCService>(OrderPCService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
