import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';
import { CreateUserDto } from './create-user.dto';

@Injectable()
export class UsersService {

    constructor(
        @InjectRepository(User)
        private userRepo: Repository<User>,
    ) { }

    findAll() {
        return this.userRepo.find(); // select * from users
    }

    findOne(id: number) {
        return this.userRepo.findOneBy({ id }); // select * from users where id = ?
    }

    create(createUserDto: CreateUserDto) {
        const user = this.userRepo.create(createUserDto);
        return this.userRepo.save(user); // insert into users (email, password, name, role) values (?, ?, ?, ?)
    }

    async update(id: number, updateUserDto: Partial<CreateUserDto>) {
        await this.userRepo.update(id, updateUserDto); // update users set ... where id = ?
        return this.userRepo.findOneBy({ id }); // select * from users where id = ?
    }

    async delete(id: number) {
        const user = await this.userRepo.findOneBy({ id }); // select * from users where id = ?
        if (user) {
            await this.userRepo.delete(id); // delete from users where id = ?
        }
        return user;
    }
}
