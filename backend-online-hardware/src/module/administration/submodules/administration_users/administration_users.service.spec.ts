import { Test, TestingModule } from '@nestjs/testing';
import { AdministrationUsersService } from './administration_users.service';

describe('AdministrationUsersService', () => {
  let service: AdministrationUsersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AdministrationUsersService],
    }).compile();

    service = module.get<AdministrationUsersService>(AdministrationUsersService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
