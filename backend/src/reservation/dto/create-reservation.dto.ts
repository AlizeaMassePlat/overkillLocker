import { IsInt, IsBoolean, IsEnum, IsOptional, IsNumber } from 'class-validator';
import { Reserve_type } from '../entities/reservation.entity'; 
export class CreateReservationDto {

    @IsOptional()
    @IsNumber()
    id?: number;
  

    @IsInt()
    state: number;

    @IsEnum(Reserve_type)
    reserve_type: Reserve_type;

    @IsBoolean()
    is_delete: boolean;

    @IsInt()
    userId: number;  

    @IsInt()
    lockerId: number; 

}
