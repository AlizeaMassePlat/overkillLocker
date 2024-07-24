import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Card } from './entities/card.entity';
import { User } from '../user/entities/user.entity'; // Assurez-vous que le chemin est correct
import { CreateCardDto } from './dto/create-card.dto';
import { UpdateCardDto } from './dto/update-card.dto';

@Injectable()
export class CardService {
  constructor(
    @InjectRepository(Card)
    private cardRepository: Repository<Card>,

    @InjectRepository(User)
    private userRepository: Repository<User>
  ) {}

  create(createCardDto: CreateCardDto) {
    return 'This action adds a new card';
  }

  findAll() {
    return this.cardRepository.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} card`;
  }

  update(id: number, updateCardDto: UpdateCardDto) {
    return `This action updates a #${id} card`;
  }

  remove(id: number) {
    return `This action removes a #${id} card`;
  }

  async findNotUsed(): Promise<Card[]> {
    // Trouver les cartes déjà attribuées
    const usedCardIds = await this.userRepository.createQueryBuilder('user')
      .select('user.card_number')
      .where('user.card_number IS NOT NULL')
      .getRawMany()
      .then(results => results.map(result => result.user_card_number));
  
    // Trouver les cartes non attribuées
    return this.cardRepository.createQueryBuilder('card')
      .where('card.id NOT IN (:...usedCardIds)', { usedCardIds })
      .getMany();
  }
}
