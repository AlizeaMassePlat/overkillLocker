import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, ManyToOne, JoinColumn } from 'typeorm';
import { AbstractEntity } from 'src/database/abstract.entity';
import { IsDate } from 'class-validator';
import { User } from 'src/user/entities/user.entity';
import { Locker } from 'src/locker/entities/locker.entity';

export enum Reserve_type {
    web = 'web',
    card = 'card'
}

@Entity()
export class Reservation extends AbstractEntity<Reservation> {


    @Column({nullable:false})
    state: number;

    @CreateDateColumn()
    @IsDate()
    date: Date;

    @Column({
        type: 'enum',
        enum: Reserve_type,
        nullable: false
    })
    reserve_type: Reserve_type;


    @Column()
    is_delete: boolean;

    @ManyToOne(() => User, (user) => user.reservations)
    @JoinColumn({ name: 'id_user' })
    user: User;
  
    @ManyToOne(() => Locker, (locker) => locker.reservations)
    @JoinColumn({ name: 'id_locker' })
    locker: Locker;

}


