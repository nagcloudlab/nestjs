import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Course } from './course.entity';
import { CreateCourseDto } from './create-course.dto';

@Injectable()
export class CoursesService {

    constructor(
        @InjectRepository(Course)
        private courseRepo: Repository<Course>,
    ) {}

    findAll() {
        return this.courseRepo.find({ relations: ['instructor'] });
    }

    findOne(id: number) {
        return this.courseRepo.findOne({ where: { id }, relations: ['instructor'] });
    }

    create(createCourseDto: CreateCourseDto) {
        const course = this.courseRepo.create(createCourseDto);
        return this.courseRepo.save(course);
    }

    async update(id: number, updateCourseDto: Partial<CreateCourseDto>) {
        await this.courseRepo.update(id, updateCourseDto);
        return this.courseRepo.findOne({ where: { id }, relations: ['instructor'] });
    }

    async delete(id: number) {
        const course = await this.courseRepo.findOne({ where: { id }, relations: ['instructor'] });
        if (course) {
            await this.courseRepo.delete(id);
        }
        return course;
    }
}
