import { IsNotEmpty, IsString } from 'class-validator';
import { post } from 'src/posts/entities/post.entity';
export class CreateCategoryDto {
  @IsNotEmpty()
  @IsString()
  id: string;

  @IsNotEmpty()
  @IsString()
  name: string;

  createdAt: Date;
  updatedAt: Date;

  posts: post[];
}
