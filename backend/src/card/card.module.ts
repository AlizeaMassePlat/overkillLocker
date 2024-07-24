import { Module } from '@nestjs/common';
import { CardService } from './card.service';
import { CardController } from './card.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Card } from './entities/card.entity';
import { User } from 'src/user/entities/user.entity';


@Module({
  imports: [TypeOrmModule.forFeature([Card, User])],
  controllers: [CardController],
  providers: [CardService],
})
export class CardModule {}
