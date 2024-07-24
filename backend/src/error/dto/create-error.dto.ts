import { IsDate, IsNumber, IsString } from 'class-validator';
import { Type } from 'class-transformer';

export class CreateErrorDto {
  @IsString()
  title: string;

  @IsString()
  body: string;

  @IsNumber()
  state: number;

  @IsNumber()
  id_user: number;

  @IsDate()
  @Type(() => Date)
  date_create: Date;
}
