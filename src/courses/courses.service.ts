import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Course } from './entities/course.entity';

@Injectable()
export class CoursesService {
  private courses: Course[] = [
    {
      id: 1,
      name: 'Como entrar no SHAPE em 15 dias',
      description: 'Como ficar sarado, shapado, trincado, bombado em apenas 15 dias',
      tags: [
        'Maromba',
        'Renato Cariani',
        'Shape',
        'Projeto verão',
        'Fitness',
        'Saude',
      ],
    },
  ];

  findAll() {
    return this.courses;
  }

  findOneById(id: string) {
    const course = this.courses.find((course) => course.id === Number(id));
    if (!course) {
      throw new HttpException(
        `Course ID ${id} not found!`,
        HttpStatus.NOT_FOUND,
      );
    } else {
      return course;
    }
  }

  create(createCourseDto: any) {
    this.courses.push(createCourseDto);
  }

  update(updateCourseDto: any, id: string) {
    const indexCourse = this.courses.findIndex(
      (course) => course.id === Number(id),
    );
    if (indexCourse >= 0) {
      this.courses[indexCourse] = updateCourseDto;
    } else {
      throw new HttpException(
        `Course ID ${id} not found!`,
        HttpStatus.NOT_FOUND,
      );
    }
  }

  remove(id: string) {
    const indexCourse = this.courses.findIndex(
      (course) => course.id === Number(id),
    );
    if (indexCourse >= 0) {
      this.courses.splice(indexCourse, 1);
    } else {
      throw new HttpException(
        `Course ID ${id} not removed!`,
        HttpStatus.NOT_FOUND,
      );
    }
  }
}
