import { BadRequestException, Body, Controller, Delete, Get, HttpCode, HttpStatus, NotFoundException, Param, Post, Put } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './create-user.dto';

@Controller('users')
export class UsersController {

    constructor(private usersService: UsersService) {}

    @Get()
    async findAll() {
        return this.usersService.findAll();
    }

    @Get(':id')
    async findOne(@Param('id') id: string) {
        const user = await this.usersService.findOne(Number.parseInt(id));
        if (!user) {
            throw new NotFoundException(`User with id ${id} not found`);
        }
        return user;
    }

    @Post()
    @HttpCode(HttpStatus.CREATED)
    async create(@Body() createUserDto: CreateUserDto) {
        if (!createUserDto.email) {
            throw new BadRequestException('Email is required');
        }
        return this.usersService.create(createUserDto);
    }

    @Put(':id')
    async update(@Param('id') id: string, @Body() updateUserDto: Partial<CreateUserDto>) {
        const user = await this.usersService.findOne(Number.parseInt(id));
        if (!user) {
            throw new NotFoundException(`User with id ${id} not found`);
        }
        return this.usersService.update(Number.parseInt(id), updateUserDto);
    }

    @Delete(':id')
    async delete(@Param('id') id: string) {
        const user = await this.usersService.findOne(Number.parseInt(id));
        if (!user) {
            throw new NotFoundException(`User with id ${id} not found`);
        }
        return this.usersService.delete(Number.parseInt(id));
    }
}
