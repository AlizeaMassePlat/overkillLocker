import { Test, TestingModule } from '@nestjs/testing';
import { GroupLockerService } from './group_locker.service';

describe('GroupLockerService', () => {
  let service: GroupLockerService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GroupLockerService],
    }).compile();

    service = module.get<GroupLockerService>(GroupLockerService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
