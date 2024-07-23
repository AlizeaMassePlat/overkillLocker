import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { LockerService } from './locker.service';
import { CreateLockerDto } from './dto/create-locker.dto';
import { UpdateLockerDto } from './dto/update-locker.dto';

@Controller('locker')
export class LockerController {
  constructor(private readonly lockerService: LockerService) {}

  @Post()
  create(@Body() createLockerDto: CreateLockerDto) {
    return this.lockerService.create(createLockerDto);
  }

  @Get()
  findAll() {
    return this.lockerService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.lockerService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: number, @Body() updateLockerDto: UpdateLockerDto) {
    return this.lockerService.update(+id, updateLockerDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.lockerService.remove(+id);
  }
}
