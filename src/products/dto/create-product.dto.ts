import {
  IsString,
  IsNumber,
  IsOptional,
  IsUrl,
  Min,
  MaxLength,
} from 'class-validator';

export class CreateProductDto {
  @IsString({ message: 'Name must be a string' })
  @MaxLength(255, { message: 'Name must not exceed 255 characters' })
  name: string;

  @IsString({ message: 'Description must be a string' })
  @IsOptional()
  @MaxLength(1000, { message: 'Description must not exceed 1000 characters' })
  description?: string;

  @IsNumber({}, { message: 'Price must be a number' })
  @Min(0, { message: 'Price must be greater than or equal to 0' })
  price: number;

}
