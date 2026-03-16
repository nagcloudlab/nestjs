import { Injectable, ConflictException, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Enrollment } from './enrollment.entity';

@Injectable()
export class EnrollmentsService {
  constructor(
    @InjectRepository(Enrollment) private repo: Repository<Enrollment>,
  ) {}

  findByUser(userSub: string): Promise<Enrollment[]> {
    return this.repo.find({
      where: { userSub },
      order: { enrolledAt: 'DESC' },
    });
  }

  async enroll(userSub: string, courseId: number): Promise<Enrollment> {
    const existing = await this.repo.findOneBy({ userSub, courseId });
    if (existing) throw new ConflictException('Already enrolled in this course');

    const enrollment = this.repo.create({ userSub, courseId });
    return this.repo.save(enrollment);
  }

  async unenroll(userSub: string, courseId: number): Promise<void> {
    const enrollment = await this.repo.findOneBy({ userSub, courseId });
    if (!enrollment) throw new NotFoundException('Enrollment not found');
    await this.repo.remove(enrollment);
  }
}
