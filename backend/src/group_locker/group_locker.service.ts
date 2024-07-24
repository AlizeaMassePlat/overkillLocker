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

  async findAll() {
    try {
      return await this.groupLockerRepository.find();
    }catch(error) {
      console.error('Error findAll():', error)
      console.error(error.stack)
    }
  }

  async findGroupLockerById(id: number) {
    return await this.groupLockerRepository.find({where: {id}});
  }

  async findGroupLockerByCoordinates(coordinates: string) {
    try {
      console.log(coordinates);
      return  this.groupLockerRepository.createQueryBuilder("group_locker")
      .select('group_locker.id')
      .addSelect('group_locker.state')
      .addSelect('group_locker.coordinate')
      .addSelect('group_locker.locker_type')
      .addSelect('group_locker.locker_count')
      .addSelect('group_locker.name_place')
      .where('coordinate=:coordinates', {coordinates})
      .getRawOne();

    }catch (error) {
      throw new NotFoundException(`Group locker not found try different coordinates ${coordinates}`)
    }
  }

  async update(id: number, updateGroupLockerDto: UpdateGroupLockerDto) {
    return await this.groupLockerRepository.update(id, updateGroupLockerDto);
  }

  async delete(id: number) {
    return await this.groupLockerRepository.delete(id);
  }
}
