import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { LogService } from './log.service';
import { CreateLogDto } from './dto/create-log.dto';
import { UpdateLogDto } from './dto/update-log.dto';
import { deleteLogDto } from './dto/delete-log.dto';

@Controller('log')
export class LogController {
  constructor(private readonly logService: LogService) {}

  @Post("/create")
  async createLog(@Body() createLogDto: CreateLogDto) {
    return this.logService.create(createLogDto);
  }

  @Get()
  async findLogs() {
    return this.logService.findAll();
  }

  @Get(':id')
  async findLog(@Param('id') id_log: number) {
    return this.logService.findOne(id_log);
  }

  @Get('/locker/:id')
  async findLogsByLocker(@Param('id') id: number) {
    return this.logService.findLogsByLocker(id);
  }

  @Get('/group_locker/:id')
  async findLogsByGroupLocker(@Param('id') id_group_locker: number) {
    return this.logService.findLogsByGroupLocker(id_group_locker);
  }

  @Patch('/update/:id')
  async updateLogById(@Param('id') id_log: number, @Body() updateLogDto: UpdateLogDto) {
    return this.logService.updateLogById(id_log, updateLogDto);
  }


  @Patch('/softdelete/:id')
  async softDelete(@Param('id') id_log: number, @Body() updateLogDto: UpdateLogDto) {
    const result = await this.logService.findOne(id_log)
    if(result.is_delete === false)
    {
      updateLogDto.is_delete = true;
      return this.logService.updateLogById(id_log, updateLogDto);
    }else {
      throw new Error('log not found or already deleted')
    }
  }

  @Delete('/delete/:id')
  async deleteLogById(@Param('id') id_log: number) {
    return this.logService.deleteLogById(id_log);
  }
}
