import { IsBoolean, IsInt, IsLatLong, IsString } from "class-validator";
import { AbstractEntity } from "src/database/abstract.entity";
import { Column, Point } from "typeorm";

export class GroupLocker extends AbstractEntity<GroupLocker> {

    @Column()
    @IsLatLong()
    coordinate:Point;

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
}
