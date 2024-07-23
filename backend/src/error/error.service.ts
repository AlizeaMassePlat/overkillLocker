import { Injectable } from '@nestjs/common';
import { CreateErrorDto } from './dto/create-error.dto';
import { UpdateErrorDto } from './dto/update-error.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Error } from './entities/error.entity';
import { DeleteErrorDto } from './dto/delete-error.dto';

@Injectable()
export class ErrorService {

  constructor(
    @InjectRepository(Error)
    private errorRepository: Repository<Error>,
  ) {}

  async create(createErrorDto: CreateErrorDto) {
    return this.errorRepository.insert(createErrorDto);
  }

  async findAll(): Promise<Error[]> {
    return this.errorRepository.find();
  }

  findOne(id: number) {
    return this.errorRepository.findOneBy({'id': id});
  }

  update(id: number, updateErrorDto: UpdateErrorDto) {
    return `This action updates a #${id} error`;
  }

  remove(id: number, deleteErrorDto: DeleteErrorDto) {
    return `This action removes a #${id} error`;
  }

  async findOneWithRelations(id: number) {
    return this.errorRepository.findOne({
      where: { id: id },
      relations: {
        user:true,
        reservation: true
      }
    });  
  }

  async findAllWithRelations() {
    return this.errorRepository.find({
      relations: {
          user:true,
          reservation: true
      }
    });
  }
}
