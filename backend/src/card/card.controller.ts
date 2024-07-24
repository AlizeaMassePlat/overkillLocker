import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CardService } from './card.service';
import { CreateCardDto } from './dto/create-card.dto';
import { UpdateCardDto } from './dto/update-card.dto';

@Controller('card')
export class CardController {
  constructor(private readonly cardService: CardService) {}

  @Post('/create')
  create(@Body() createCardDto: CreateCardDto) {
    return this.cardService.create(createCardDto);
  }

  @Get()
  findAll() {
    return this.cardService.findCards();
  }

  @Get('/find/:id')
  findOne(@Param('id') id: number) {
    return this.cardService.findOneCard(id);
  }

  @Get('/notUsed')
  findNotUsed() {
    return this.cardService.findNotUsed();
  }


  @Patch('/update/:id')
  update(@Param('id') id: number, @Body() updateCardDto: UpdateCardDto) {
    return this.cardService.updateCard(id, updateCardDto);
  }

  @Delete('/delete/:id')
  remove(@Param('id') id: number) {
    return this.cardService.deleteCard(id);
  }
}
