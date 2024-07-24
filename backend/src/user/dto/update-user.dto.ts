import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-user.dto';
import { IsBoolean, IsDate, IsDefined, IsEmail, IsNumber, IsOptional, IsString, Length } from 'class-validator';
import { Type } from 'class-transformer';


export class UpdateUserDto {

    @IsOptional()
    @IsString()
    id?: string;

    @IsOptional()
    @Length(8)
    @IsString()
    password?: string;

    @IsOptional()
    @IsString()
    firstname: string = null;

    @IsOptional()
    @IsString()
    lastname?: string = null;

    @IsEmail()
    @IsString()
    @IsOptional()
    email?: string;

    @IsOptional()
    @IsString()
    adress?: string = null;

    @IsOptional()
    @IsString()
    role?: string;

    @IsOptional()
    @IsString()
    school_prom?: string;

    @IsOptional()
    @IsNumber()
    card_number?: number;

    @IsOptional()
    @IsBoolean()
    is_deleted?: boolean = false;

    @IsOptional()
    @IsDate()
    @Type(() => Date)
    create_date?: Date;
}
