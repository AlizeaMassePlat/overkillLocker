import { Entity, Column, CreateDateColumn, ManyToOne, OneToOne, JoinColumn } from 'typeorm';
import { AbstractEntity } from 'src/database/abstract.entity';
import { IsDate } from 'class-validator';
import { User } from 'src/user/entities/user.entity';
import { Reservation } from 'src/reservation/entities/reservation.entity';

@Entity()
export class Error extends AbstractEntity<Error>{

    @Column({
        unique:false,
        nullable:false
    })
    title: string;

    @Column({
        unique:false,
        type: "text",
        nullable: true
    })
    body:string;

    @Column({
        unique: false,
        type: "int",
        nullable: false,
        default: 0 
    })
    state: number;

    @Column({
        unique: false,
        type: "int",
        nullable: false,
        default: 0 
    })
    type: number;

    @Column({
        unique:false,
        type: "text",
        nullable: true
    })
    media:string;

    @Column({
        unique: false,
        nullable:false,
    })
    @IsDate()
    @CreateDateColumn()
    date_create:Date;

    
    @ManyToOne(() => User, (user) => user.errors)
    user: User

    @OneToOne(() => Reservation)
    @JoinColumn()
    reservation: Reservation
}

