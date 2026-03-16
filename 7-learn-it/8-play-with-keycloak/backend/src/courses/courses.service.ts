import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Course } from './course.entity';
import { CreateCourseDto } from './create-course.dto';

@Injectable()
export class CoursesService {
  constructor(
    @InjectRepository(Course) private repo: Repository<Course>,
  ) {}

  findAllPublished(): Promise<Course[]> {
    return this.repo.find({ where: { isPublished: true }, order: { createdAt: 'DESC' } });
  }

  async findOne(id: number): Promise<Course> {
    const course = await this.repo.findOneBy({ id });
    if (!course) throw new NotFoundException('Course not found');
    return course;
  }

  create(dto: CreateCourseDto, createdBy: string): Promise<Course> {
    const course = this.repo.create({ ...dto, createdBy });
    return this.repo.save(course);
  }

  async update(id: number, dto: CreateCourseDto): Promise<Course> {
    await this.findOne(id);
    await this.repo.update(id, dto);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.findOne(id);
    await this.repo.delete(id);
  }
}
