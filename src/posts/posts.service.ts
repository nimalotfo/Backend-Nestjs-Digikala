import { Injectable } from '@nestjs/common';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { post } from './entities/post.entity';

@Injectable()
export class PostsService {
  constructor(@Inject() private postRepository: Repository<post>) {}

  async create(createPostDto: CreatePostDto) {
    const result = await this.postRepository.create(createPostDto);
    return result;
  }

  findAll(): Promise<post[]> {
    return this.postRepository.find();
  }

  findOne(id: string) {
    return this.postRepository.findOne({ where: { id } });
  }

  async update(id: string, updatePostDto: UpdatePostDto) {
    const result = await this.postRepository.update(id, updatePostDto);
    return result;
  }

  async remove(id: string) {
    const result = await this.postRepository.delete(id);
    return result;
  }
}
