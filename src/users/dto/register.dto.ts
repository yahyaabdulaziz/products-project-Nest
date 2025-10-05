import {
  IsString,
  IsEmail,
  IsStrongPassword,
  MinLength,
  MaxLength,
  IsEnum,
  IsOptional,
} from 'class-validator';
import { UserRole } from '../enums/user_role.enum';

export class RegisterDto {
  @IsString({ message: 'First name must be a string' })
  @MinLength(2, { message: 'First name must be at least 2 characters long' })
  @MaxLength(50, { message: 'First name must not exceed 50 characters' })
  firstName: string;

  @IsString({ message: 'Last name must be a string' })
  @MinLength(2, { message: 'Last name must be at least 2 characters long' })
  @MaxLength(50, { message: 'Last name must not exceed 50 characters' })
  lastName: string;

  @IsEmail({}, { message: 'Please provide a valid email address' })
  email: string;

  @IsStrongPassword(
    {
      minLength: 8,
      minLowercase: 1,
      minUppercase: 1,
      minNumbers: 1,
      minSymbols: 1,
    },
    {
      message:
        'Password must be at least 8 characters long and contain at least one lowercase letter, one uppercase letter, one number, and one symbol',
    },
  )
  password: string;

   @IsEnum(UserRole, { message: 'Role must be either admin or user' })
    @IsOptional()
    role?: UserRole;
}
