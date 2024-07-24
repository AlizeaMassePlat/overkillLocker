import { IsBoolean, IsDate, IsDateString, IsInt, IsNumber, IsString } from "class-validator";
import { Locker } from "src/locker/entities/locker.entity";

export class CreateLogDto {

    @IsString()
    title:string;

    @IsString()
    body:string
    
    @IsNumber()
    state:number;

    @IsDateString()
    create_date:string;

    @IsBoolean()
    is_delete:boolean;

    @IsNumber()
    id_locker:number;
}
