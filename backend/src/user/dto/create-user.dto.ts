import { IsString, IsEmail, IsNumber, Length, IsOptional, IsBoolean, IsDate  } from 'class-validator';
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
    create_date: Date;

}

