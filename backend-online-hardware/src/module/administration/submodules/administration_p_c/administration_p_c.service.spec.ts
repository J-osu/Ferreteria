import { Test, TestingModule } from '@nestjs/testing';
import { AdministrationPCService } from './administration_p_c.service';

describe('AdministrationPCService', () => {
  let service: AdministrationPCService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AdministrationPCService],
    }).compile();

    service = module.get<AdministrationPCService>(AdministrationPCService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
