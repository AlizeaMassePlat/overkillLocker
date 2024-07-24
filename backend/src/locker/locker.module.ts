import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { LockerService } from './locker.service';
import { LockerController } from './locker.controller';
import { Locker } from './entities/locker.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LoggerMiddleware } from 'src/locker/middleware/logger.middleware';
@Module({
  imports: [TypeOrmModule.forFeature([Locker])],

  controllers: [LockerController],
  providers: [LockerService],
})

export class LockerModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(LoggerMiddleware)
      .forRoutes('*'); // Apply to all routes in this module
  }
}
