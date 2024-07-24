import { IsBoolean, IsInt, IsString } from "class-validator";
import { AbstractEntity } from "src/database/abstract.entity";
import { Locker } from "src/locker/entities/locker.entity";
import { Column, Entity, OneToMany } from "typeorm";

@Entity()
export class GroupLocker extends AbstractEntity<GroupLocker> {

    @Column({ nullable: true })
    coordinate: string; 

    @Column()
    @IsInt()
    state:number;

    @Column({ length:255 })
    @IsString()
    locker_type:string;

    @Column()
    @IsInt()
    locker_count:number;

    @Column({ length:255 })
    @IsString()
    name_place:string;

    @Column({ default:false})
    @IsBoolean()
    is_delete:boolean;

    @OneToMany(() => Locker, (locker) => locker.groupLocker)
    lockers: Locker[]
  
}
