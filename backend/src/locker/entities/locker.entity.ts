import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Reservation } from '../../reservation/entities/reservation.entity';

@Entity()
export class Locker {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  state: number;

  @Column()
  position: string;

  @Column()
  is_open: boolean;

  @Column()
  is_delete: boolean;

  @OneToMany(() => Reservation, (reservation) => reservation.locker)
  reservations: Reservation[];
}
