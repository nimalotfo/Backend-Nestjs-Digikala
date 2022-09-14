import { user } from 'src/users/entities/user.entity';
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { category } from 'src/categories/entities/category.entity';

@Entity()
export class post {
  @PrimaryGeneratedColumn()
  id: string;

  @Column({ length: 500 })
  title: string;

  @Column('text')
  body: string;

  @Column()
  createdAt: Date;

  @Column()
  updatedAt: Date;

  @Column()
  user: user;
  @Column()
  categories: category[];
}
