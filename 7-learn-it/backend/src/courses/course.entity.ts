import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { User } from '../users/user.entity';

@Entity('courses')
export class Course {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'varchar', length: 200 })
    title: string;

    @Column({ type: 'text', nullable: true })
    description: string;

    @Column()
    instructor_id: number;

    @ManyToOne(() => User)
    @JoinColumn({ name: 'instructor_id' })
    instructor: User;

    @Column({ type: 'varchar', length: 50, nullable: true })
    category: string;

    @Column({ type: 'varchar', length: 20, nullable: true })
    difficulty: string;

    @Column({ type: 'boolean', default: false })
    is_published: boolean;

    @Column({ type: 'timestamp', default: () => 'NOW()' })
    created_at: Date;
}
