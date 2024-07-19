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

  @Post('/create')
  async create(@Body() createUserDto: CreateUserDto ) {
    
    const salt =  await genSalt();
    createUserDto.password =  await hash(createUserDto.password, salt);
    return this.usersService.create(createUserDto);
  }


  @Get(':id')
  findOne(@Param('id') id: number): Promise<User> {
    return this.usersService.findOne(+id);
  }

  @Patch('/update/:id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(+id, updateUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usersService.remove(+id);
  }
  
  @Post('/login')
  login(@Body() loginUserDto: LoginUserDto ) {
    return this.usersService.login(loginUserDto.email, loginUserDto.password);
  }
  
}
