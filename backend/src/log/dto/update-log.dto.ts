import { PartialType } from '@nestjs/mapped-types';
import { CreateLogDto } from './create-log.dto';
import { IsBoolean, IsDateString, IsInt, IsNumber, IsOptional, IsString } from 'class-validator';

export class UpdateLogDto {

    @IsOptional()
    @IsNumber()
    id?:number;

    @IsOptional()
    @IsString()
    title?:string;

    @IsOptional()
    @IsString()
    body?:string
    
    @IsOptional()
    @IsNumber()
    state?:number;

    @IsOptional()
    @IsDateString()
    create_date?:string;

    @IsOptional()
    @IsBoolean()
    is_delete?:boolean;

    @IsOptional()
    @IsNumber()
    id_locker?:number;
}
