import { IsString, IsEmail, IsNumber, Length, IsOptional, IsBoolean, IsDate, IsDefined, IsEnum } from 'class-validator';
import { Type } from 'class-transformer';

export enum Gender {
  Male = 'male',
  Female = 'female',
  NonBinary = 'non binary'
}
export class CreateUserDto {
  @IsOptional()
  @IsString()
  id?: string;

  @Length(8)
  @IsString()
  password: string;

  @IsOptional()
  @IsString()
  firstname?: string;

  @IsOptional()
  @IsString()
  lastname?: string;

  @IsEmail()
  @IsDefined()
  email: string;

  @IsOptional()
  @IsString()
  adress?: string;

  @IsString()
  role: string;

  @IsString()
  school_prom: string;

  @IsNumber()
  card_number: number;

  @IsOptional()
  @IsNumber()
  age?: number;

  @IsOptional()
  @IsNumber()
  Phone_number?: string;

  @IsEnum(Gender)
  @IsOptional()
  gender?: Gender;

  @IsBoolean()
  @IsOptional()
  is_deleted?: boolean;

  @IsDate()
  @Type(() => Date)
  @IsOptional()
  create_date?: Date;
}
