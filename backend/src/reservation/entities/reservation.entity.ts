import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, ManyToOne, JoinColumn } from 'typeorm';
import { AbstractEntity } from 'src/database/abstract.entity';
import { IsDate } from 'class-validator';
import { User } from 'src/user/entities/user.entity';
import { Locker } from 'src/locker/entities/locker.entity';

@Entity()
export class Reservation extends AbstractEntity<Reservation> {
  @PrimaryGeneratedColumn()
  id: number;


    @Column({nullable:false})
  state: number;

  @CreateDateColumn()
  @IsDate()
  date: Date;

  @Column()
  reserve_type: string;

  @Column()
  is_delete: boolean;

  @Column()
  id_locker: number;

  @Column()
  id_user: string;

  @ManyToOne(() => User, (user) => user.reservations)
  @JoinColumn({ name: 'id_user' })
  user: User;

  @ManyToOne(() => Locker, (locker) => locker.reservations)
  @JoinColumn({ name: 'id_locker' })
  locker: Locker;
}


