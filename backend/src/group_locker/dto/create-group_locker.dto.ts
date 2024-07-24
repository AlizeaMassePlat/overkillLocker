import { IsInt, IsString, IsBoolean, IsLatLong, IsNumber } from "class-validator";
import { Point } from "typeorm";

export class CreateGroupLockerDto {

    @IsLatLong()
    coordinate:Point;

    @IsInt()
    state:number;

    @IsString()
    locker_type:string;

    @IsInt()
    locker_count:number;

    @IsString()
    name_place:string;

    @IsBoolean()
    is_delete:boolean;

}
