import { Test, TestingModule } from '@nestjs/testing';
import { SearchFilterController } from './search_filter.controller';
import { SearchFilterService } from './search_filter.service';

describe('SearchFilterController', () => {
  let controller: SearchFilterController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SearchFilterController],
      providers: [SearchFilterService],
    }).compile();

    controller = module.get<SearchFilterController>(SearchFilterController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
