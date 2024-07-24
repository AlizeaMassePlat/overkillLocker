import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UserService } from './user.service';

import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { LoginUserDto } from './dto/login-user.dto';
import { User } from './entities/user.entity';
import { genSalt, hash } from 'bcrypt';

@Controller('user')
export class UsersController {
  constructor(private readonly usersService: UserService) {}

  @Get()
  findAll() {
    return this.usersService.findAll();
  }

  @Post('/register')
  async controllerCreate(@Body() createUserDto: CreateUserDto ) {
    const salt =  await genSalt();
    createUserDto.password =  await hash(createUserDto.password, salt);
    return this.usersService.register(createUserDto);
  }

  @Get('/finduserbyid/:id')
  async controllerFindOne(@Param('id') id: string): Promise<User> {
    return await this.usersService.findOne(id);
  }

  @Patch('/update/:id')
  async controllerUpdate(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    if(updateUserDto.password)
    {
      const salt =  await genSalt();
      updateUserDto.password =  await hash(updateUserDto.password, salt);
    }
    return await this.usersService.update(id, updateUserDto);
  }

  @Delete('/delete/:id')
  async controllerRemove(@Param('id') id: string) {
    return await this.usersService.remove(id);
  }
  
  @Post('/login')
  async controllerLogin(@Body() loginUserDto: LoginUserDto ) {
    return await this.usersService.login(loginUserDto.email, loginUserDto.password);
  }
  
}
