// eslint-disable-next-line prettier/prettier
import { Controller, Get, Param, Post, Body, Patch, Delete } from '@nestjs/common';
import { CoursesService } from './courses.service';
import { CreateCourseDto } from './dto/create-course.dto';
import { UpdateCourseDto } from './dto/update-course.dto';

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
  create(@Body() createCourseDto: CreateCourseDto) {
    return this.coursesService.create(createCourseDto);
  }
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCourseDto: UpdateCourseDto) {
    return this.coursesService.update(updateCourseDto, id);
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
