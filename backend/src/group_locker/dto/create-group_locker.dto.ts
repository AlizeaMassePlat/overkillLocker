import { IsInt, IsString, IsBoolean, IsLatLong } from "class-validator";
import { Point } from "typeorm";

export class CreateGroupLockerDto {
    
    @IsString()
    coordinate:String;

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
