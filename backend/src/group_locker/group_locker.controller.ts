import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { GroupLockerService } from './group_locker.service';
import { CreateGroupLockerDto } from './dto/create-group_locker.dto';
import { UpdateGroupLockerDto } from './dto/update-group_locker.dto';

@Controller('group-locker')
export class GroupLockerController {
  constructor(private readonly groupLockerService: GroupLockerService) {}

  @Post()
  create(@Body() createGroupLockerDto: CreateGroupLockerDto) {
    return this.groupLockerService.create(createGroupLockerDto);
  }

  @Get()
  findAll() {
    return this.groupLockerService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.groupLockerService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateGroupLockerDto: UpdateGroupLockerDto) {
    return this.groupLockerService.update(+id, updateGroupLockerDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.groupLockerService.remove(+id);
  }

  @Get('/find/all')
  findAllWithRelat(){
    return this.groupLockerService.findAllRelations();
  }
}
