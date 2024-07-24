import { Entity, Column, PrimaryGeneratedColumn, IsNull, OneToOne } from 'typeorm';
import { AbstractEntity } from 'src/database/abstract.entity';
import { User } from 'src/user/entities/user.entity';
import { IsBoolean, isBoolean, IsNumber, IsString } from 'class-validator';

@Entity()
export class Card {

  @PrimaryGeneratedColumn()
  @IsNumber()
  id:number;

  @Column({ length: 255 })
  @IsString()
  card_identifier: string;

  @Column()
  @IsNumber()
  state: number;

  @Column()
  @IsBoolean()
  is_deleted: boolean;

  @OneToOne(() => User, user => user.card)
  user: User;
}
