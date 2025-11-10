import { Test, TestingModule } from '@nestjs/testing';
import { CatalogeController } from './cataloge.controller';
import { CatalogeService } from './cataloge.service';

describe('CatalogeController', () => {
  let controller: CatalogeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CatalogeController],
      providers: [CatalogeService],
    }).compile();

    controller = module.get<CatalogeController>(CatalogeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
