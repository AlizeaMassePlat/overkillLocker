import { Module } from '@nestjs/common';
import { ErrorService } from './error.service';
import { ErrorController } from './error.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ErrorEntity } from './entities/error.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ErrorEntity])],
  controllers: [ErrorController],
  providers: [ErrorService],
})
export class ErrorModule {}
