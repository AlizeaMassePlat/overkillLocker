import { IsNotEmpty, IsString, IsBoolean, IsNumber } from 'class-validator';

export class CreateLockerDto {
  @IsNumber()
  readonly state: number;

  @IsString()
  @IsNotEmpty()
  readonly position: string;

  @IsBoolean()
  readonly is_open: boolean;

  @IsBoolean()
  readonly is_delete: boolean;
}
