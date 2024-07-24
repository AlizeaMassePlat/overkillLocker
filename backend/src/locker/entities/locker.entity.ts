import { Reservation } from '../../reservation/entities/reservation.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, OneToMany } from 'typeorm';
import { GroupLocker } from 'src/group_locker/entities/group_locker.entity';

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

  @Column({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP',
  })
  create_date: Date;
  
  @ManyToOne(() => GroupLocker, (GroupLocker) => GroupLocker.lockers)
  groupLocker: GroupLocker
  
  @OneToMany(() => Reservation, (reservation) => reservation.locker)
  reservations: Reservation[];

}
