import { IsBoolean, IsNumber, IsString } from "class-validator";

export class CreateLockerDto {

    @IsBoolean()
    is_open: boolean;

    @IsString()
    position: string;

    @IsNumber()
    state: number;

    @IsBoolean()
    is_delete: boolean;

}
