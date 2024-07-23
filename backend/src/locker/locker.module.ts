import { Module } from '@nestjs/common';
import { LockerService } from './locker.service';
import { LockerController } from './locker.controller';
import { Locker } from './entities/locker.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Locker])],

  controllers: [LockerController],
  providers: [LockerService],
})
export class LockerModule {}
