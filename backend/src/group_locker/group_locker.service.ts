import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateGroupLockerDto } from './dto/create-group_locker.dto';
import { UpdateGroupLockerDto } from './dto/update-group_locker.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { GroupLocker } from './entities/group_locker.entity';
import { Point, Repository } from 'typeorm';

@Injectable()
export class GroupLockerService {

  constructor(
    @InjectRepository(GroupLocker)
    private groupLockerRepository: Repository<GroupLocker>
  ) {}

  async createGroupLocker(createGroupLockerDto: CreateGroupLockerDto) {
    return this.groupLockerRepository.insert(createGroupLockerDto);
  }

  findAll() {
    return this.groupLockerRepository.find();
  }

  findGroupLockerById(id: number) {
    return this.groupLockerRepository.findOneBy({id});
  }

  async findGroupLockerByCoordinates(coordinates: Point) {
    try {
      console.log(coordinates);
      const result =  this.groupLockerRepository.createQueryBuilder("group_locker")
      .select('group_locker.id')
      .addSelect('group_locker.state')
      .addSelect('group_locker.coordinate')
      .addSelect('group_locker.locker_type')
      .addSelect('group_locker.locker_count')
      .addSelect('group_locker.name_place')
      .where('coordinate=:coordinates', {coordinates})
      .getRawOne();

      return result;

    }catch (error) {
      throw new NotFoundException(`Group locker not found try different coordinates ${coordinates.coordinates}`)
    }
  }

  update(id: number, updateGroupLockerDto: UpdateGroupLockerDto) {
    return this.groupLockerRepository.update(id, updateGroupLockerDto);
  }

  delete(id: number) {
    return this.groupLockerRepository.delete(id);
  }
}
