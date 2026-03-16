import { BadRequestException, Body, Controller, Delete, Get, HttpCode, HttpStatus, NotFoundException, Param, Post, Put } from '@nestjs/common';
import { CoursesService } from './courses.service';
import { CreateCourseDto } from './create-course.dto';

@Controller('courses')
export class CoursesController {

    constructor(private coursesService: CoursesService) {}

    @Get()
    async findAll() {
        return this.coursesService.findAll();
    }

    @Get(':id')
    async findOne(@Param('id') id: string) {
        const course = await this.coursesService.findOne(Number.parseInt(id));
        if (!course) {
            throw new NotFoundException(`Course with id ${id} not found`);
        }
        return course;
    }

    @Post()
    @HttpCode(HttpStatus.CREATED)
    async create(@Body() createCourseDto: CreateCourseDto) {
        if (!createCourseDto.title) {
            throw new BadRequestException('Title is required');
        }
        return this.coursesService.create(createCourseDto);
    }

    @Put(':id')
    async update(@Param('id') id: string, @Body() updateCourseDto: Partial<CreateCourseDto>) {
        const course = await this.coursesService.findOne(Number.parseInt(id));
        if (!course) {
            throw new NotFoundException(`Course with id ${id} not found`);
        }
        return this.coursesService.update(Number.parseInt(id), updateCourseDto);
    }

    @Delete(':id')
    async delete(@Param('id') id: string) {
        const course = await this.coursesService.findOne(Number.parseInt(id));
        if (!course) {
            throw new NotFoundException(`Course with id ${id} not found`);
        }
        return this.coursesService.delete(Number.parseInt(id));
    }
}
