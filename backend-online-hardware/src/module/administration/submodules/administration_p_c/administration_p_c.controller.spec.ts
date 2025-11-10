import { Test, TestingModule } from '@nestjs/testing';
import { AdministrationPCController } from './administration_p_c.controller';
import { AdministrationPCService } from './administration_p_c.service';

describe('AdministrationPCController', () => {
  let controller: AdministrationPCController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AdministrationPCController],
      providers: [AdministrationPCService],
    }).compile();

    controller = module.get<AdministrationPCController>(AdministrationPCController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
