import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './users/user.entity';
import { Course } from './courses/course.entity';
import { UserCourse } from './enrollments/user-course.entity';
import { UsersController } from './users/users.controller';
import { CoursesController } from './courses/courses.controller';
import { EnrollmentsController } from './enrollments/enrollments.controller';
import { UsersService } from './users/users.service';
import { CoursesService } from './courses/courses.service';
import { EnrollmentsService } from './enrollments/enrollments.service';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 55000,
      username: 'postgres',
      password: 'postgrespw',
      database: 'postgres',
      entities: [User, Course, UserCourse],
      synchronize: false,
    }),
    TypeOrmModule.forFeature([User, Course, UserCourse]),
  ],
  controllers: [UsersController, CoursesController, EnrollmentsController],
  providers: [UsersService, CoursesService, EnrollmentsService],
})
export class AppModule {}
