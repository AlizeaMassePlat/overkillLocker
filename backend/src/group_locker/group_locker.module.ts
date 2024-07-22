import { Module } from '@nestjs/common';
import { GroupLockerService } from './group_locker.service';
import { GroupLockerController } from './group_locker.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GroupLocker } from './entities/group_locker.entity';

@Module({
  imports: [TypeOrmModule.forFeature([GroupLocker])],
  controllers: [GroupLockerController],
  providers: [GroupLockerService],
})
export class GroupLockerModule {}
