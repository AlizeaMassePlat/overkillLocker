import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { LockerService } from './locker.service';
import { CreateLockerDto } from './dto/create-locker.dto';
import { UpdateLockerDto } from './dto/update-locker.dto';

@Controller('locker')
export class LockerController {
  constructor(private readonly lockerService: LockerService) {}

  @Post()
  controllerCreate(@Body() createLockerDto: CreateLockerDto) {
    return this.lockerService.create(createLockerDto);
  }

  
  @Get()
  controllerFindAll() {
    return this.lockerService.findAll();
  }

  @Get(':id')
  controllerFindOne(@Param('id') id: string) {
    return this.lockerService.findOne(+id);
  }

  @Patch(':id')
  controllerUpdate(@Param('id') id: string, @Body() updateLockerDto: UpdateLockerDto) {
    return this.lockerService.updateLocker(+id, updateLockerDto);
  }

  @Patch('/delete/:id')
  controllerDeleteLocker(@Param('id') id: string, @Body() updateLockerDto: UpdateLockerDto) {
    updateLockerDto.is_delete = true;
    return this.lockerService.updateLocker(+id, updateLockerDto );
  }

  @Patch('/unDelete/:id')
  controllerUndeleteLocker(@Param('id') id: string, @Body() updateLockerDto: UpdateLockerDto) {
    updateLockerDto.is_delete = false;
    return this.lockerService.updateLocker(+id, updateLockerDto );
  }

  @Patch('/unlock/:id')
  controllerOpenLocker(@Param('id') id: string, @Body() updateLockerDto: UpdateLockerDto) {
    updateLockerDto.is_open = true;
    updateLockerDto.state = 1;
    return this.lockerService.updateLocker(+id, updateLockerDto );
  }

  @Patch('/lock/:id')
  controllerCloseLocker(@Param('id') id: string, @Body() updateLockerDto: UpdateLockerDto) {
    updateLockerDto.is_open = false;
    updateLockerDto.state = 0;
    return this.lockerService.updateLocker(+id, updateLockerDto );
  }

  // @Delete(':id')
  // controllerDelete(@Param('id') id: string) {
  //   return this.lockerService.delete(+id);
  // }

  

}
