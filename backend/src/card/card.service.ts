import { Injectable } from '@nestjs/common';
import { CreateCardDto } from './dto/create-card.dto';
import { UpdateCardDto } from './dto/update-card.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Card } from './entities/card.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CardService {

  constructor(
    @InjectRepository(Card)
    private cardRepository: Repository<Card>
  ) {}

  async create(createCardDto: CreateCardDto) {

    const card_exists = await this.cardRepository.createQueryBuilder("card")
    .where('card.card_identifier=:card', {card: createCardDto.card_identifier})
    .getExists();

    if(!card_exists)
    {
      return this.cardRepository.insert(createCardDto);
    }else {
      throw new Error('Card identifier already in database');
    }
  }

  async findCards() {
    return this.cardRepository.find();
  }

  async findOneCard(id: number) {
    return this.cardRepository.findOneBy({id});
  }

  async updateCard(id: number, updateCardDto: UpdateCardDto) {
    return this.cardRepository.update(id, updateCardDto);
  }

  async deleteCard(id: number) {
    return this.cardRepository.delete(id);
  }

  async assignCard(id_user, id_card) {
    
  }
}
