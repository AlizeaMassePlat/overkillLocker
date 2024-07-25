import { IsString, IsEmail, IsNumber, Length, IsOptional, IsBoolean, IsDate, IsDefined, IsInt  } from 'class-validator';
export class CreateCardDto {

    @IsOptional()
    @IsNumber()
    id?:number;

    @IsOptional()
    @IsString()
    card_identifier?: string;

    @IsOptional()
    @IsNumber()
    state?: number;

    @IsOptional()
    @IsBoolean()
    is_deleted?: boolean;
}
