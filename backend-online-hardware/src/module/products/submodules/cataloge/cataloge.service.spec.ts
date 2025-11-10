import { Test, TestingModule } from '@nestjs/testing';
import { CatalogeService } from './cataloge.service';

describe('CatalogeService', () => {
  let service: CatalogeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CatalogeService],
    }).compile();

    service = module.get<CatalogeService>(CatalogeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
