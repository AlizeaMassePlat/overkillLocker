import { Module } from '@nestjs/common';
import { GroupLockerService } from './group_locker.service';
import { GroupLockerController } from './group_locker.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GroupLocker } from './entities/group_locker.entity';
import { Locker } from 'src/locker/entities/locker.entity';
import { Reservation } from 'src/reservation/entities/reservation.entity';

@Module({
  imports: [TypeOrmModule.forFeature([GroupLocker, Locker, Reservation])],
  controllers: [GroupLockerController],
  providers: [GroupLockerService],
})
export class GroupLockerModule {}
