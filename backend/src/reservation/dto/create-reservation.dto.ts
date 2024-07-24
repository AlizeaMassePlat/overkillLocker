import { IsNotEmpty, IsNumber, IsBoolean, IsString, IsOptional } from 'class-validator';

export class CreateReservationDto {
  @IsNumber()
  @IsNotEmpty()
  readonly state: number;

  @IsString()
  @IsNotEmpty()
  readonly reserve_type: string;

  @IsBoolean()
  @IsOptional()
  readonly is_delete?: boolean;

  @IsNumber()
  @IsNotEmpty()
  readonly id_locker: string;

  @IsNumber()
  @IsNotEmpty()
  readonly id_user: string;
}
