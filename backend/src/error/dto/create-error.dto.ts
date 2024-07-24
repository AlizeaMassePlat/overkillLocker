import { IsString, IsNumber, IsDate } from 'class-validator';

export class CreateErrorDto { 

    @IsString()
    title:string;

    @IsString()
    body:string;

    @IsDate()
    date_create:Date

    @IsNumber()
    id_user:number
}
