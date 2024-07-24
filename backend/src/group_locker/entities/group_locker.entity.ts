import { IsBoolean, IsInt, IsLatLong, IsString } from "class-validator";
import { AbstractEntity } from "src/database/abstract.entity";
import { Locker } from "src/locker/entities/locker.entity";
import { Column, Entity, OneToMany, Point } from "typeorm";

@Entity()
export class GroupLocker extends AbstractEntity<GroupLocker> {

    @Column({ length:255 })
    coordinate: String; 

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

    @Column()
    @IsBoolean()
    is_delete:boolean;

    @OneToMany(() => Locker, (locker) => locker.groupLocker)
    lockers: Locker[]
  
}
