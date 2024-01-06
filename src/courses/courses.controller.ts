// eslint-disable-next-line prettier/prettier
import { Controller, Get, Param, Post, Body, Patch, Delete } from '@nestjs/common';
import { CoursesService } from './courses.service';

@Controller('courses')
export class CoursesController {
  constructor(private readonly coursesService: CoursesService) {}

  @Get()
  findAll() {
    return this.coursesService.findAll();
  }
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.coursesService.findOneById(id);
  }
  @Post()
  create(@Body() body) {
    return this.coursesService.create(body);
  }
  @Patch(':id')
  update(@Param('id') id: string, @Body() body) {
    return this.coursesService.update(body, id);
  }
  @Delete(':id')
  deleteById(@Param('id') id: string) {
    return this.coursesService.remove(id);
  }
  /*
  @Get(':id')
  findOne(@Param() params) {
    return `Seu parametro é ${params.id}`;
  }
  */
  /*
  @Post()
  create(@Body() body) {
    return body;
  }
  */
  /*
  @Post()
  create(@Body('name') body) {
    return body;
  }
  */
}
