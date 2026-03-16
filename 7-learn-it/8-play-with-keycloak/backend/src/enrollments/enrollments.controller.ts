import { Controller, Get, Post, Delete, Param, ParseIntPipe } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { EnrollmentsService } from './enrollments.service';
import { CurrentUser } from '../auth/current-user.decorator';

@ApiTags('enrollments')
@ApiBearerAuth()
@Controller('enrollments')
export class EnrollmentsController {
  constructor(private readonly enrollmentsService: EnrollmentsService) {}

  @Get('mine')
  findMine(@CurrentUser() user: any) {
    return this.enrollmentsService.findByUser(user.sub);
  }

  @Post(':courseId')
  enroll(
    @Param('courseId', ParseIntPipe) courseId: number,
    @CurrentUser() user: any,
  ) {
    return this.enrollmentsService.enroll(user.sub, courseId);
  }

  @Delete(':courseId')
  unenroll(
    @Param('courseId', ParseIntPipe) courseId: number,
    @CurrentUser() user: any,
  ) {
    return this.enrollmentsService.unenroll(user.sub, courseId);
  }
}
