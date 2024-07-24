import { IsBoolean, IsInt, IsLatLong, IsNumber, IsOptional, IsString } from 'class-validator';
import { Point } from 'typeorm';

export class UpdateGroupLockerDto {
   
    @IsOptional()
    @IsLatLong()
    coordinate?:string;

    @IsOptional()
    @IsInt()
    state?:number;

    @IsOptional()
    @IsString()
    locker_type?:string;

    @IsOptional()
    @IsInt()
    locker_count?:number;

    @IsOptional()
    @IsString()
    name_place?:string;

    @IsOptional()
    @IsBoolean()
    is_delete?:boolean;
}
