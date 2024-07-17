import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Card {
    
    @PrimaryGeneratedColumn()
    id_card: number;

    @Column()
    card_identifier: number;

    @Column()
    state: number;
    
}