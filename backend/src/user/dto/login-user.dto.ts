import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-user.dto';
import { IsString, IsEmail} from 'class-validator';

export class LoginUserDto extends PartialType(CreateUserDto) {
  @IsEmail()
  email: string;

  @IsString()
  password: string;
}
