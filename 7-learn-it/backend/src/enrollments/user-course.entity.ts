import { Entity, Column, ManyToOne, JoinColumn, PrimaryColumn } from 'typeorm';
import { User } from '../users/user.entity';
import { Course } from '../courses/course.entity';

@Entity('user_courses')
export class UserCourse {
    @PrimaryColumn()
    user_id: number;

    @PrimaryColumn()
    course_id: number;

    @ManyToOne(() => User)
    @JoinColumn({ name: 'user_id' })
    user: User;

    @ManyToOne(() => Course)
    @JoinColumn({ name: 'course_id' })
    course: Course;

    @Column({ type: 'timestamp', default: () => 'NOW()' })
    enrolled_at: Date;

    @Column({ type: 'int', default: 0 })
    progress: number;
}
