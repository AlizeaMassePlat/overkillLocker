import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { AbstractEntity } from 'src/database/abstract.entity';

@Entity()
export class Card extends AbstractEntity<Card> {

  @Column({ length: 255 })
  card_identifier: string;

  @Column()
  state: number;

  @Column()
  is_deleted: boolean;
}
