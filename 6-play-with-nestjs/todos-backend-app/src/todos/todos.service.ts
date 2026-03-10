import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Todo } from './todo.entity';
import { CreateTodoDto } from './create-todo-dto';

@Injectable()
export class TodosService {

    constructor(
        @InjectRepository(Todo)
        private todoRepo: Repository<Todo>,
    ) {}

    findAll() {
        return this.todoRepo.find();
    }

    findOne(id: number) {
        return this.todoRepo.findOneBy({ id });
    }

    create(createTodoDto: CreateTodoDto) {
        const todo = this.todoRepo.create(createTodoDto);
        return this.todoRepo.save(todo);
    }

    async update(id: number, updateTodoDto: CreateTodoDto) {
        await this.todoRepo.update(id, updateTodoDto);
        return this.todoRepo.findOneBy({ id });
    }

    async delete(id: number) {
        const todo = await this.todoRepo.findOneBy({ id });
        if (todo) {
            await this.todoRepo.delete(id);
        }
        return todo;
    }

}
