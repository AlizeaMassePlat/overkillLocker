import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ReservationService } from './reservation.service';
import { ReservationController } from './reservation.controller';
import { Reservation } from './entities/reservation.entity';
import { User } from '../user/entities/user.entity';
import { Locker } from '../locker/entities/locker.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Reservation, User, Locker]), 
  ],
  controllers: [ReservationController],
  providers: [ReservationService],
  exports: [ReservationService],  
})
export class ReservationModule {}
