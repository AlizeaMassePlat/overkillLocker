import { Entity, Column, PrimaryGeneratedColumn, IsNull } from 'typeorm';
import { AbstractEntity } from 'src/database/abstract.entity';
import { IsBoolean, isBoolean, IsInt, IsNumber, IsString } from 'class-validator';

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
  is_delete: boolean;
}
