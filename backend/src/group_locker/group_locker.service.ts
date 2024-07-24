import { Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
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
      const groupLocker = await this.groupLockerRepository.createQueryBuilder("group_locker")
        .where('group_locker.coordinate = :coordinates', { coordinates })
        .getRawOne();
      if (!groupLocker) {
        throw new NotFoundException(`Group locker not found with coordinates: ${coordinates}`);
      }
      return groupLocker;
    } catch (error) {
        console.error('Unexpected error occurred:', error);
        throw new InternalServerErrorException('An unexpected error occurred');
    }
  }

  async update(id: number, updateGroupLockerDto: UpdateGroupLockerDto) {
    return await this.groupLockerRepository.update(id, updateGroupLockerDto);
  }

  async delete(id: number) {
    return await this.groupLockerRepository.delete(id);
  }
}
