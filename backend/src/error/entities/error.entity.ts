import { Entity, Column, OneToMany, CreateDateColumn } from 'typeorm';
import { AbstractEntity } from 'src/database/abstract.entity';
import { IsDate } from 'class-validator';
import { User } from 'src/user/entities/user.entity';

@Entity()
export class ErrorEntity extends AbstractEntity<Error>{

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
        nullable:false,
    })
    @IsDate()
    @CreateDateColumn()
    date_create:Date;

    @Column({
        unique:false,
        nullable:false
        })
    @OneToMany((type) => User, (user) => user.id)
    id_user:string;
}

