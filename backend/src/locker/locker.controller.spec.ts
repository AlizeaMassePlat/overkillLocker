import { Test, TestingModule } from '@nestjs/testing';
import { LockerController } from './locker.controller';
import { LockerService } from './locker.service';

describe('LockerController', () => {
  let controller: LockerController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [LockerController],
      providers: [LockerService],
    }).compile();

    controller = module.get<LockerController>(LockerController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
