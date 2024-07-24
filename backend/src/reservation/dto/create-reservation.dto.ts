import { IsNotEmpty, IsNumber, IsString, IsBoolean, IsDate } from 'class-validator';
import { Type } from 'class-transformer';

export class CreateReservationDto {
  @IsNotEmpty()
  @IsNumber()
  state: number;

  @IsNotEmpty()
  @IsDate()
  @Type(() => Date)
  date: Date;

  @IsNotEmpty()
  @IsString()
  reserve_type: string;

  @IsNotEmpty()
  @IsBoolean()
  is_delete: boolean;

  @IsNotEmpty()
  @IsNumber()
  id_locker: number;

  @IsNotEmpty()
  @IsNumber()
  id_user: number;
}
