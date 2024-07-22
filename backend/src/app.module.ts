import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { DatabaseModule } from './database/database.module';
import { UserModule } from './user/user.module';
import { CardModule } from './card/card.module';
import { ErrorModule } from './error/error.module';
import { LogModule } from './log/log.module';
import { LockerModule } from './locker/locker.module';
import { GroupLockerModule } from './group_locker/group_locker.module';
import { ReservationModule } from './reservation/reservation.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    DatabaseModule,
    UserModule,
    CardModule,
    ErrorModule,
    LogModule,
    LockerModule,
    GroupLockerModule,
    ReservationModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
