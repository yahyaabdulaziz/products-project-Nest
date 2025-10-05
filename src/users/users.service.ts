import { CreateUserDto } from './dto/create-user.dto';
import { Repository } from 'typeorm';
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private readonly user: Repository<User>,
  ) {}

  async create(createUserDto: CreateUserDto): Promise<any> {
    const user = await this.user.create(createUserDto);
    return this.user.save(user);
  }

  async findAll() {
    const users = await this.user.find();
    return {
      data: users,
      count: users.length,
    };
  }

  async findOne(id) {
    const user = await this.user.findOne({ where: { id: id } });

    if (!user) {
      throw new NotFoundException();
    }
    return user;
  }

  async findByEmail(email: string) {
    return this.user.findOne({ where: { email } });
  }



  async remove(id) {
    const user = await this.user.findOne({ where: { id: id } });

    if (!user) {
      throw new NotFoundException();
    }
    await this.user.delete(id);
    return { res: 'Deleted user on ' + id };
  }
}
