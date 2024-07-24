import { IsBoolean, IsInt, IsLatLong, IsNumber, IsString } from 'class-validator';
import { Point } from 'typeorm';

export class UpdateGroupLockerDto {
   
    @IsLatLong()
    coordinate?:Point;

    @IsInt()
    state?:number;

    @IsString()
    locker_type?:string;

    @IsInt()
    locker_count?:number;

    @IsString()
    name_place?:string;

    @IsBoolean()
    is_delete?:boolean;
}
