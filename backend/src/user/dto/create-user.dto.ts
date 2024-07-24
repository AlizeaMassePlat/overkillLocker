import { Options } from '@nestjs/common';
import { Type } from 'class-transformer';
import { IsString, IsEmail, IsNumber, Length, IsOptional, IsBoolean, IsDate, IsDefined  } from 'class-validator';
export class CreateUserDto {

    @Length(8)
    @IsString()
    password: string;

    @IsOptional()
    @IsString()
    firstname: string = null;

    @IsOptional()
    @IsString()
    lastname: string = null;

    @IsEmail()
    @IsString()
    @IsDefined()
    email: string;

    @IsOptional()
    @IsString()
    adress: string = null;

    @IsString()
    role: string;

    @IsString()
    school_prom: string;

    @IsNumber()
    card_number: number;

    @IsBoolean()
    is_deleted: boolean = false;

    @IsDate()
    @Type(() => Date)
    create_date: Date;

}

