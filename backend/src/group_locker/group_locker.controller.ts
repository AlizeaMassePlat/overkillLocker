import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { GroupLockerService } from './group_locker.service';
import { CreateGroupLockerDto } from './dto/create-group_locker.dto';
import { UpdateGroupLockerDto } from './dto/update-group_locker.dto';
import { Point } from 'typeorm';

@Controller('group-locker')
export class GroupLockerController {
  constructor(private readonly groupLockerService: GroupLockerService) {}

  @Post('/create')
  async createGroupLocker(@Body() createGroupLockerDto: CreateGroupLockerDto) {
    return await this.groupLockerService.createGroupLocker(createGroupLockerDto);
  }

  @Get()
  async findGroupLockers() {
    return this.groupLockerService.findAll();
  }

  @Get('/coordinate')
  async findGroupLockerByCoordinates(@Body() data: string) {       
    return await this.groupLockerService.findGroupLockerByCoordinates(data['coordinate']);
  }

  @Get(':id')
  async findGroupLocker(@Param('id') id_group_locker: number) {
    return await this.groupLockerService.findGroupLockerById(+id_group_locker);
  }

  @Patch('/update/:id')
  async update(@Param('id') id_group_locker: number, @Body() updateGroupLockerDto: UpdateGroupLockerDto) {
    return await this.groupLockerService.update(+id_group_locker, updateGroupLockerDto);
  }

  @Patch('/softdelete/:id')
  async softDelete(@Param('id') id_group_locker:number, @Body() updateGroupLockerDto:UpdateGroupLockerDto) {
    updateGroupLockerDto.is_delete = true;
    return await this.groupLockerService.update(id_group_locker, updateGroupLockerDto);
  } 

  @Delete('/delete/:id')
  async remove(@Param('id') id_group_locker: string) {
    return await this.groupLockerService.delete(+id_group_locker);
  }
}
