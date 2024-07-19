import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-user.dto';
import { IsNumber, IsString } from 'class-validator';


export class LoginUserDto extends PartialType(CreateUserDto) {

    @IsString()
    id: string;
}
