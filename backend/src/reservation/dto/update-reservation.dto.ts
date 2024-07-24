import { IsInt, IsBoolean, IsEnum, IsOptional, IsNumber } from 'class-validator';
import { Reserve_type } from '../entities/reservation.entity'; 

export class UpdateReservationDto {

    @IsOptional()
    @IsNumber()
    id?: number;

    @IsOptional()
    @IsInt()
    state?: number;

    @IsOptional()
    @IsEnum(Reserve_type)
    reserve_type?: Reserve_type;

    @IsOptional()
    @IsBoolean()
    is_delete?: boolean;

    @IsOptional()
    @IsInt()
    userId?: number;  

    @IsOptional()
    @IsInt()
    lockerId?: number; 
}
