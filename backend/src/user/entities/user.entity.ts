import { Card } from 'src/card/entities/card.entity';
import { Error } from 'src/error/entities/error.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany, OneToOne, JoinColumn } from 'typeorm';

@Entity()
export class User {

  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ length: 255 })
  password: string;

  @Column({ length: 255 , nullable:true})
  firstname: string;

  @Column({ length: 255, nullable:true })
  lastname: string;

  @Column({ unique: true, nullable:false })
  email: string;

  @Column({ length: 255, nullable:true })
  adress: string;

  @Column({ length: 255 })
  role: string;

  @Column({ length: 255, nullable:true })
  school_prom: string;

  @Column({ nullable: true })
  card_number: number;

  @Column({ default: 0})
  is_deleted: boolean;

  @Column({
      type: 'timestamp',
      default: () => 'CURRENT_TIMESTAMP',
  })
  create_date: Date;

  @OneToMany(() => Error, (error) => error.user)
  errors: Error[];

  @OneToOne(() => Card, card => card.user)
  @JoinColumn({ name: 'card_number' })
  card: Card;
}


