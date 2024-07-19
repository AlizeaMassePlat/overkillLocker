import { Injectable, NotFoundException, UnauthorizedException, BadRequestException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {

  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

// -------------------------------------------------------------------
  async register(createUserDto: CreateUserDto) {
    try {
      const result = await this.usersRepository.insert(createUserDto);
      const message = `User with ID ${result.identifiers[0].id} successfully created`;
      return { message };
    } catch (error) {
      throw new BadRequestException(`${error}`);
    }


  }
// -------------------------------------------------------------------

// -------------------------------------------------------------------
  async findAll():Promise<User[]> {
    return await this.usersRepository.find();
  }
// -------------------------------------------------------------------


// -------------------------------------------------------------------
  async findOne(id: string):Promise<User> {
    return await this.usersRepository.findOneBy({id});
  }
// -------------------------------------------------------------------


// -------------------------------------------------------------------
  async update(id: string, updateUserDto: UpdateUserDto) {
    return await this.usersRepository.update(id, updateUserDto);
  }  
// -------------------------------------------------------------------

  
// -------------------------------------------------------------------
  async remove(id: string): Promise<{ message: string }> {
    const result = await this.usersRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`User with ID ${id} not found`);
    }
    return { message: `User with ID ${id} successfully deleted` };
  }
// -------------------------------------------------------------------




// -------------------------------------------------------------------
  async login(email: string, password: string): Promise<User> {
    const user = await this.usersRepository.createQueryBuilder('user')
      .where('user.email = :email', { email })
      .getOne();

    if (!user) {
      throw new UnauthorizedException('Invalid email or password');
    }

    const passwordValid = await bcrypt.compare(password, user.password);
    if (!passwordValid) {
      throw new UnauthorizedException('Invalid email or password');
    }

    return user;
  }
// -------------------------------------------------------------------

}
