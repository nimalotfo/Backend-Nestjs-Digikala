import { IsNotEmpty } from 'class-validator';
import { IsString } from 'class-validator';
import { IsEmail } from 'class-validator';
export class CreateUserDto {
  @IsNotEmpty()
  @IsString()
  id: string;

  @IsNotEmpty()
  @IsString()
  name: string;

  @IsEmail()
  @IsNotEmpty()
  @IsString()
  email: string;

  @IsNotEmpty()
  @IsString()
  password: string;

  createdAt: Date;
  updatedAt: Date;
}
