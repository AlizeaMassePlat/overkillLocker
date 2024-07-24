import { Injectable } from '@nestjs/common';
import { CreateLockerDto } from './dto/create-locker.dto';
import { UpdateLockerDto } from './dto/update-locker.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Locker } from './entities/locker.entity';

@Injectable()
export class LockerService {

  constructor(
    @InjectRepository(Locker)
    private lockerRepository: Repository<Locker>,
  ) {}

  create(createLockerDto: CreateLockerDto) {
    return 'This action adds a new locker';
  }

  findAll() {
    return this.lockerRepository.find({
      relations: {
        groupLocker:true
      }
    });
  }

  findOne(id: number) {
    return `This action returns a #${id} locker`;
  }

  update(id: number, updateLockerDto: UpdateLockerDto) {
    return `This action updates a #${id} locker`;
  }

  remove(id: number) {
    return `This action removes a #${id} locker`;
  }

}
