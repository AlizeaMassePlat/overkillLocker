import { Entity, Column, PrimaryGeneratedColumn, OneToOne } from 'typeorm';
import { AbstractEntity } from 'src/database/abstract.entity';
import { User } from 'src/user/entities/user.entity';

@Entity()
export class Card extends AbstractEntity<Card> {

  @Column({ length: 255 })
  card_identifier: string;

  @Column()
  state: number;

  @Column()
  is_deleted: boolean;

  @OneToOne(() => User, user => user.card)
  user: User;
}
