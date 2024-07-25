import { IsInt, IsString, IsBoolean, IsNotEmpty } from 'class-validator';

export class CreateReservationDto {
  @IsInt()
  @IsNotEmpty()
  state: number;

  @IsString()
  @IsNotEmpty()
  reserve_type: string;

  @IsBoolean()
  is_delete: boolean;

  @IsInt()
  @IsNotEmpty()
  id_locker: number;

  @IsInt()
  @IsNotEmpty()
  id_user: string;
}
