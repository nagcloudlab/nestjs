import { BadRequestException, Body, Controller, Delete, Get, HttpCode, HttpStatus, NotFoundException, Param, Post, Put } from '@nestjs/common';
import { EnrollmentsService } from './enrollments.service';
import { CreateEnrollmentDto } from './create-enrollment.dto';

@Controller('enrollments')
export class EnrollmentsController {

    constructor(private enrollmentsService: EnrollmentsService) {}

    @Get()
    async findAll() {
        return this.enrollmentsService.findAll();
    }

    @Get('user/:userId')
    async findByUser(@Param('userId') userId: string) {
        return this.enrollmentsService.findByUser(Number.parseInt(userId));
    }

    @Get('course/:courseId')
    async findByCourse(@Param('courseId') courseId: string) {
        return this.enrollmentsService.findByCourse(Number.parseInt(courseId));
    }

    @Post()
    @HttpCode(HttpStatus.CREATED)
    async enroll(@Body() createEnrollmentDto: CreateEnrollmentDto) {
        if (!createEnrollmentDto.user_id || !createEnrollmentDto.course_id) {
            throw new BadRequestException('user_id and course_id are required');
        }
        return this.enrollmentsService.enroll(createEnrollmentDto);
    }

    @Put(':userId/:courseId')
    async updateProgress(
        @Param('userId') userId: string,
        @Param('courseId') courseId: string,
        @Body('progress') progress: number,
    ) {
        if (progress === undefined || progress === null) {
            throw new BadRequestException('progress is required');
        }
        const enrollment = await this.enrollmentsService.updateProgress(
            Number.parseInt(userId),
            Number.parseInt(courseId),
            progress,
        );
        if (!enrollment) {
            throw new NotFoundException(`Enrollment not found for user ${userId} and course ${courseId}`);
        }
        return enrollment;
    }

    @Delete(':userId/:courseId')
    async unenroll(
        @Param('userId') userId: string,
        @Param('courseId') courseId: string,
    ) {
        const enrollment = await this.enrollmentsService.unenroll(
            Number.parseInt(userId),
            Number.parseInt(courseId),
        );
        if (!enrollment) {
            throw new NotFoundException(`Enrollment not found for user ${userId} and course ${courseId}`);
        }
        return enrollment;
    }
}
