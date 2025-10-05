import {
  IsNumber,
  IsOptional,
  IsString,
  IsEnum,
  IsEmail,
  IsStrongPassword,
} from 'class-validator';
import { UserRole } from '../enums/user_role.enum';

export class CreateUserDto {
  @IsString({ message: 'first Name Must be String' })
  firstName: string;

  @IsString({ message: 'last Name Must be String' })
  lastName: string;

  @IsEmail()
  email: string;

  @IsNumber({}, { message: 'age Must be Number' })
  age: number;

  @IsStrongPassword(
    {
      minLength: 8,
    },
    {
      message: 'Password must be at least 8 characters long',
    },
  )
  password: string;

  @IsEnum(UserRole, { message: 'Role must be either admin or user' })
  @IsOptional()
  role?: UserRole;
}
