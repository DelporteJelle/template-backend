import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { TemplateService } from './template.service';
import { CreateTemplateDto } from './dto/create-template.dto/create-template.dto';
import { UpdateTemplateDto } from './dto/update-template.dto/update-template.dto';
//Generate controller with the command: nest g c {name}
@Controller('template')
export class TemplateController {
  constructor(private readonly templateService: TemplateService) {}

  @Get()
  findAll(@Query() paginationQuery) {
    const { limit, offset } = paginationQuery;
    return this.templateService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.templateService.findOne(id);
  }

  @Post()
  create(@Body() body: CreateTemplateDto) {
    return this.templateService.create(body);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() body: UpdateTemplateDto) {
    return this.templateService.update(id, body);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.templateService.remove(id);
  }
}
