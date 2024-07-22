import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { DatabaseModule } from './database/database.module';
import { UserModule } from './user/user.module';
import { CardModule } from './card/card.module';
import { ErrorModule } from './error/error.module';
import { LogModule } from './log/log.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    DatabaseModule,
    UserModule,
    CardModule,
    ErrorModule,
    LogModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
