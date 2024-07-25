import { IsDate, IsNumber, IsOptional, IsString } from 'class-validator';
import { Type } from 'class-transformer';

export class UpdateErrorDto{
    @IsOptional()
    @IsNumber()
    id?:number

    @IsOptional()
    @IsString()
    title?: string;

    @IsOptional()
    @IsString()
    body?: string;

    @IsOptional()
    @IsNumber()
    state?: number;

    @IsOptional()
    @IsNumber()
    id_user?: number;

    @IsOptional()
    @IsDate()
    @Type(() => Date)
    date_create?: Date;
}
