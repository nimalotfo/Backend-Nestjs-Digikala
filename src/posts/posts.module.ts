import { Module } from '@nestjs/common';
import { PostsService } from './posts.service';
import { PostsController } from './posts.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { post } from './entities/post.entity';

@Module({
  imports: [TypeOrmModule.forFeature([post])],
  controllers: [PostsController],
  providers: [PostsService],
})
export class PostsModule {}
