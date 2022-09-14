import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { CategoriesModule } from './categories/categories.module';
import { PostsModule } from './posts/posts.module';
import { AuthModule } from './auth/auth.module';
import { user } from './users/entities/user.entity';
import { category } from './categories/entities/category.entity';
import { post } from './posts/entities/post.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 3000,
      username: 'postgres',
      password: 'yaser1379',
      database: 'test',
      entities: [user, category, post],
    }),
    UsersModule,
    CategoriesModule,
    PostsModule,
    AuthModule,
  ],
})
export class AppModule {}
