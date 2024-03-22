import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Query,
} from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  findAll(@Query('role') role?: 'INTERN' | 'ADMIN' | 'ENGINEER') {
    return this.usersService.findAll(role);
  }

  @Get('interns')
  findAllInterns() {
    return [];
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return { id };
  }

  @Post()
  create(@Body() user: object) {
    return user;
  }

  @Get(':id/:userId')
  update(
    @Param('id') id: string,
    @Param('userId') userId: string,
    @Body() user: object,
  ) {
    return { id, user, userId };
  }

  @Delete(':id/')
  delete(@Param('id') id: string, @Body() user: object) {
    return { id, user };
  }
}
