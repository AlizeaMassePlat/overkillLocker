import { Test, TestingModule } from '@nestjs/testing';
import { GroupLockerController } from './group_locker.controller';
import { GroupLockerService } from './group_locker.service';

describe('GroupLockerController', () => {
  let controller: GroupLockerController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GroupLockerController],
      providers: [GroupLockerService],
    }).compile();

    controller = module.get<GroupLockerController>(GroupLockerController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
