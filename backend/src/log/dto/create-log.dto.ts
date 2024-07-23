import { IsBoolean, IsInt, IsNumber, IsString } from "class-validator";

export class CreateLogDto {

    @IsString()
    log:string;
    
    @IsNumber()
    status:number;

    @IsBoolean()
    is_delete:boolean;

    @IsInt()
    id_locker:number
}
