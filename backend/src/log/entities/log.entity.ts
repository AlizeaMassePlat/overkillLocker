import { IsBoolean, IsDate, IsNumber, IsString } from "class-validator";
import { AbstractEntity } from "src/database/abstract.entity";
import { Column, Entity } from "typeorm";

@Entity()
export class Log extends AbstractEntity<Log> {

    @Column({length:255})
    @IsString()
    title:string;

    @Column({length: 255})
    @IsString()
    body:string;

    @Column()
    @IsNumber()
    state:number;

    @Column()
    @IsDate()
    date:Date;

    @Column()
    @IsBoolean()
    is_delete:boolean;
    
    @Column()
    @IsNumber()
    id_locker:number;
}
