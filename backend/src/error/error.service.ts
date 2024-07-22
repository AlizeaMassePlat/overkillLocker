import { Injectable } from '@nestjs/common';
import { CreateErrorDto } from './dto/create-error.dto';
import { UpdateErrorDto } from './dto/update-error.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ErrorEntity } from './entities/error.entity';
import { DeleteErrorDto } from './dto/delete-error.dto';

@Injectable()
export class ErrorService {

  constructor(
    @InjectRepository(ErrorEntity)
    private errorRepository: Repository<ErrorEntity>,
  ) {}

  async create(createErrorDto: CreateErrorDto) {
    return this.errorRepository.insert(createErrorDto);
  }

  findAll() {
    return this.errorRepository.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} error`;
  }

  update(id: number, updateErrorDto: UpdateErrorDto) {
    return `This action updates a #${id} error`;
  }

  remove(id: number, deleteErrorDto: DeleteErrorDto) {
    return `This action removes a #${id} error`;
  }
}
