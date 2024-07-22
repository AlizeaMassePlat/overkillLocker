import { Module } from '@nestjs/common';
import { LockerService } from './locker.service';
import { LockerController } from './locker.controller';

@Module({
  controllers: [LockerController],
  providers: [LockerService],
})
export class LockerModule {}
