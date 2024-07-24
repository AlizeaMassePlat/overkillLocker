import { IsBoolean, IsNumber, IsString, IsOptional} from "class-validator";

export class CreateLockerDto {

    @IsNumber()
    id: number;
  
    @IsBoolean()
    is_open: boolean;

    @IsString()
    position: string;

    @IsNumber()
    state: number;

    @IsBoolean()
    is_delete: boolean;


    @IsNumber()
    id_group_locker: number;


}
