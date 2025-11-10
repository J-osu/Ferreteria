import { Test, TestingModule } from '@nestjs/testing';
import { AdministrationUsersController } from './administration_users.controller';
import { AdministrationUsersService } from './administration_users.service';

describe('AdministrationUsersController', () => {
  let controller: AdministrationUsersController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AdministrationUsersController],
      providers: [AdministrationUsersService],
    }).compile();

    controller = module.get<AdministrationUsersController>(AdministrationUsersController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
