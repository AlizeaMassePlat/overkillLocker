import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-user.dto';
import { IsNumber } from 'class-validator';


export class LoginUserDto extends PartialType(CreateUserDto) {

    @IsNumber()
    id: number;
}
