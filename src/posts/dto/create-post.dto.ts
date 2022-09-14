import { IsNotEmpty, IsString } from 'class-validator';
import { user } from 'src/users/entities/user.entity';
import { category } from 'src/categories/entities/category.entity';

export class CreatePostDto {
  @IsNotEmpty()
  @IsString()
  id: string;

  @IsNotEmpty()
  @IsString()
  title: string;

  @IsNotEmpty()
  @IsString()
  body: string;

  @IsNotEmpty()
  categories: category[];

  createdAt: Date;
  updaedAt: Date;

  user: user;
}
