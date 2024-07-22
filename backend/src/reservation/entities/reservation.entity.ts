import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn } from 'typeorm';
import { AbstractEntity } from 'src/database/abstract.entity';
import { IsDate } from 'class-validator';

@Entity()
export class Reservation extends AbstractEntity<Reservation> {


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
    id_user: number;

}


