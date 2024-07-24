import { IsBoolean, IsDate, IsNumber, IsString } from "class-validator";
import { AbstractEntity } from "src/database/abstract.entity";
import { Locker } from "src/locker/entities/locker.entity";
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Log {

    @PrimaryGeneratedColumn()
    id:number;

    @Column({length:255})
    @IsString()
    title:string;

    @Column({length: 255})
    @IsString()
    body:string;

    @Column()
    @IsNumber()
    state:number;

    @CreateDateColumn()
    @IsDate()
    create_date:Date;

    @Column()
    @IsBoolean()
    is_delete:boolean;

    @Column()
    @IsNumber()
    id_locker:number;

    @ManyToOne(() => Locker, locker => locker.id)
    @JoinColumn({ name: 'id_locker' })  // Explicitly specify the column name
    locker: Locker;
}
