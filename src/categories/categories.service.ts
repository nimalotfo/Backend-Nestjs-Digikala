import { Injectable } from '@nestjs/common';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { category } from './entities/category.entity';

@Injectable()
export class CategoriesService {
  constructor(@Inject() private categoryRepository: Repository<category>) {}

  async create(createCategoryDto: CreateCategoryDto) {
    const result = await this.categoryRepository.create(createCategoryDto);
    return result;
  }

  findAll() {
    return this.categoryRepository.find();
  }

  findOne(id: string) {
    return this.categoryRepository.findOne({ where: { id } });
  }

  async update(id: string, updateCategoryDto: UpdateCategoryDto) {
    const result = await this.categoryRepository.update(id, updateCategoryDto);
    return result;
  }

  async remove(id: string) {
    const result = await this.categoryRepository.delete(id);
    return result;
  }
}
