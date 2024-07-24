import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ErrorService } from './error.service';
import { CreateErrorDto } from './dto/create-error.dto';
import { UpdateErrorDto } from './dto/update-error.dto';
import { DeleteErrorDto } from './dto/delete-error.dto';

@Controller('error')
export class ErrorController {
  constructor(private readonly errorService: ErrorService) {}

  @Post('/create')
  async Create(@Body() createErrorDto: CreateErrorDto) {
    return this.errorService.create(createErrorDto);
  }

  @Get()
  findAll() {
    return this.errorService.findAll();
  }

  @Get('/all')
  findErrorUsers() {
    return this.errorService.findAllWithRelations();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.errorService.findOne(+id);
  }

  @Patch('/update/:id')
  update(@Param('id') id: string, @Body() updateErrorDto: UpdateErrorDto) {
    return this.errorService.update(+id, updateErrorDto);
  }

  @Delete('/delete/:id')
  remove(@Param('id') id: string, @Body() deleteErrorDto: DeleteErrorDto) {
    return this.errorService.remove(+id, deleteErrorDto);
  }

  @Get('incident/:id')
  findErrorUser(@Param('id') id: number) {
    return this.errorService.findOneWithRelations(id);
  }
}
