import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Course } from './entities/course.entity';
import { CreateCourseDto } from './dto/create-course.dto';
import { UpdateCourseDto } from './dto/update-course.dto';

@Injectable()
export class CoursesService {
  constructor(
    @InjectRepository(Course)
    private readonly courseRepository: Repository<Course>,
  ) {}

  async findAll(): Promise<Course[]> {
    return await this.courseRepository.find();
  }

  async findOneById(id: string) {
    const numberId = Number(id);
    const course = await this.courseRepository.findOne({
      where: { id: numberId },
    });
    if (!course) {
      throw new NotFoundException(`Course ID ${id} not found!`);
    } else {
      return course;
    }
  }

  async create(createCourseDto: CreateCourseDto) {
    const newCourse = this.courseRepository.create(createCourseDto);
    return await this.courseRepository.save(newCourse);
  }

  async update(updateCourseDto: UpdateCourseDto, id: string) {
    const numberId = Number(id);
    const course = await this.courseRepository.findOne({
      where: { id: numberId },
    });
    if (!course) {
      throw new NotFoundException(`Course ID ${id} not updated!`);
    }

    this.courseRepository.merge(course, updateCourseDto);
  }

  async remove(id: string) {
    const numberId = Number(id);
    const course = await this.courseRepository.findOne({
      where: { id: numberId },
    });
    if (!course) {
      throw new NotFoundException(`Course ID ${id} not removed`);
    }

    await this.courseRepository.remove(course);
  }
}
