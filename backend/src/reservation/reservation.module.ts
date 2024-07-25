import { Module } from '@nestjs/common';
import { ReservationService } from './reservation.service';
import { ReservationController } from './reservation.controller';
import { Reservation } from './entities/reservation.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/user/entities/user.entity';
import { Locker } from 'src/locker/entities/locker.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Reservation, User, Locker])],
  controllers: [ReservationController],
  providers: [ReservationService],
})
export class ReservationModule {}
