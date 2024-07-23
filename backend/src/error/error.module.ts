import { Module } from '@nestjs/common';
import { ErrorService } from './error.service';
import { ErrorController } from './error.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Error } from './entities/error.entity';
import { User } from 'src/user/entities/user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Error, User])],
  controllers: [ErrorController],
  providers: [ErrorService],
})
export class ErrorModule {}
