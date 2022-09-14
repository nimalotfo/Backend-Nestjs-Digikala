import { DataSource } from 'typeorm';
import { Repository } from 'typeorm';
import { Injectable, Inject } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { user } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(@Inject() private userRepository: Repository<user>) {}

  getUserByEmail(email: string) {
    return this.userRepository.findOne({ where: { email } });
  }
  async create(createUserDto: CreateUserDto) {
    const result = await this.userRepository.create(createUserDto);
    return result;
  }

  findAll(): Promise<user[]> {
    return this.userRepository.find();
  }

  findOne(id: string) {
    return this.userRepository.findOne({ where: { id } });
  }

  async update(id: string, updateUserDto: UpdateUserDto) {
    const result = await this.userRepository.update(id, updateUserDto);
    return result;
  }

  async remove(id: string) {
    const result = await this.userRepository.delete(id);
    return result;
  }
}
