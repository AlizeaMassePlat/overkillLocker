import { Injectable, BadRequestException,  } from '@nestjs/common';
import { CreateLockerDto } from './dto/create-locker.dto';
import { UpdateLockerDto } from './dto/update-locker.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Locker } from './entities/locker.entity';

@Injectable()
export class LockerService {


  constructor(
    @InjectRepository(Locker)
    private LockerRepository: Repository<Locker>,
  ) {}


  async create(createLockerDto: CreateLockerDto) {
    try{
      const result = await this.LockerRepository.insert(createLockerDto);
      const message = `Locker with ID ${result.identifiers[0].id} successfully created`;
      return { message };
    }
    catch (error) {
      throw new BadRequestException(`${error}`);
    }
  }



  async findAll() {
    return await this.LockerRepository.find();
  }

  async findOne(id: number):Promise<Locker> {
    return await this.LockerRepository.findOneBy({id});
  }

  async update(id: number, updateLockerDto: UpdateLockerDto) {
    return await this.LockerRepository.update(id, updateLockerDto);
  }

  async remove(id: number) {
    return await this.LockerRepository.delete(id);
  }


  
}
