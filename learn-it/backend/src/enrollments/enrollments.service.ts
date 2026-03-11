import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserCourse } from './user-course.entity';
import { CreateEnrollmentDto } from './create-enrollment.dto';

@Injectable()
export class EnrollmentsService {

    constructor(
        @InjectRepository(UserCourse)
        private enrollmentRepo: Repository<UserCourse>,
    ) {}

    findAll() {
        return this.enrollmentRepo.find({ relations: ['user', 'course'] });
    }

    findByUser(userId: number) {
        return this.enrollmentRepo.find({
            where: { user_id: userId },
            relations: ['user', 'course'],
        });
    }

    findByCourse(courseId: number) {
        return this.enrollmentRepo.find({
            where: { course_id: courseId },
            relations: ['user', 'course'],
        });
    }

    enroll(createEnrollmentDto: CreateEnrollmentDto) {
        const enrollment = this.enrollmentRepo.create(createEnrollmentDto);
        return this.enrollmentRepo.save(enrollment);
    }

    async updateProgress(userId: number, courseId: number, progress: number) {
        await this.enrollmentRepo.update(
            { user_id: userId, course_id: courseId },
            { progress },
        );
        return this.enrollmentRepo.findOne({
            where: { user_id: userId, course_id: courseId },
            relations: ['user', 'course'],
        });
    }

    async unenroll(userId: number, courseId: number) {
        const enrollment = await this.enrollmentRepo.findOne({
            where: { user_id: userId, course_id: courseId },
            relations: ['user', 'course'],
        });
        if (enrollment) {
            await this.enrollmentRepo.delete({ user_id: userId, course_id: courseId });
        }
        return enrollment;
    }
}
