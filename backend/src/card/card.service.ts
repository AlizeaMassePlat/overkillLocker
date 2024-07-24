import { ConflictException, Injectable } from '@nestjs/common';
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


  async create(createCardDto: CreateCardDto) {

    const card_exists = await this.cardRepository.createQueryBuilder("card")
    .where('card.card_identifier=:card', {card: createCardDto.card_identifier})
    .getExists();

    if(!card_exists)
    {
      return this.cardRepository.insert(createCardDto);
    }else {

      throw new ConflictException(`Card with identifier ${createCardDto.card_identifier} already in database`);
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
