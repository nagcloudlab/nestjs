import { BadRequestException, Body, Controller, Delete, Get, HttpCode, HttpStatus, NotFoundException, Param, Post, Put } from '@nestjs/common';
import { TodosService } from './todos.service';
import { CreateTodoDto } from './create-todo-dto';


// request / response handling logic..

@Controller('todos')
export class TodosController {

    constructor(private todosService: TodosService) { }

    @Get()
    async findAll() {
        return this.todosService.findAll();
    }

    @Get(':id')
    async findOne(@Param('id') id: string) {
        const todo = await this.todosService.findOne(Number.parseInt(id));
        if (!todo) {
            throw new NotFoundException(`Todo with id ${id} not found`);
        }
        return todo;
    }

    @Post()
    @HttpCode(HttpStatus.CREATED)
    async create(@Body() createTodoDto: CreateTodoDto) {
        if (!createTodoDto.title) {
            throw new BadRequestException('Title is required');
        }
        return this.todosService.create(createTodoDto);
    }

    @Put(':id')
    async update(@Param('id') id: string, @Body() updateTodoDto: CreateTodoDto) {
        const todo = await this.todosService.findOne(Number.parseInt(id));
        if (!todo) {
            throw new NotFoundException(`Todo with id ${id} not found`);
        }
        if (!updateTodoDto.title) {
            throw new BadRequestException('Title is required');
        }
        return this.todosService.update(Number.parseInt(id), updateTodoDto);
    }

    @Delete(':id')
    async delete(@Param('id') id: string) {
        const todo = await this.todosService.findOne(Number.parseInt(id));
        if (!todo) {
            throw new NotFoundException(`Todo with id ${id} not found`);
        }
        return this.todosService.delete(Number.parseInt(id));
    }

}
