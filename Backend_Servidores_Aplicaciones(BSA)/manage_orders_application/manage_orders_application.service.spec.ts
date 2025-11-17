import { Test, TestingModule } from '@nestjs/testing';
import { ManageOrdersApplicationService } from './manage_orders_application.service';

describe('ManageOrdersApplicationService', () => {
  let service: ManageOrdersApplicationService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ManageOrdersApplicationService],
    }).compile();

    service = module.get<ManageOrdersApplicationService>(ManageOrdersApplicationService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
