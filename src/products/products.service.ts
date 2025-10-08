import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Repository } from 'typeorm';
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Product } from './entities/product.entity';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Product)
    private readonly product: Repository<Product>,
  ) {}

  async createProduct(
    createProductDto: CreateProductDto,
    photo?: Express.Multer.File,
  ): Promise<Product> {
    const baseUrl = 'http://localhost:3000';
    const product = this.product.create({
      ...createProductDto,
      photoUrl: photo ? `${baseUrl}/uploads/products/${photo.filename}` : null,
    });

    return this.product.save(product);
  }

  async findAllProducts() {
    const products = await this.product.find();
    return {
      data: products,
      count: products.length,
    };
  }

  async findOneProduct(id: string): Promise<Product> {
    const product = await this.product.findOne({ where: { id } });

    if (!product) {
      throw new NotFoundException('Product not found');
    }
    return product;
  }

  async update(
    id: string,
    updateProductDto: UpdateProductDto,
  ): Promise<Product> {
    const product = await this.product.findOne({ where: { id } });
    if (!product) {
      throw new NotFoundException('Product not found');
    }

    return this.product.save({ ...product, ...updateProductDto });
  }

  async remove(id: string): Promise<{ message: string }> {
    const product = await this.product.findOne({ where: { id } });

    if (!product) {
      throw new NotFoundException('Product not found');
    }
    await this.product.delete(id);
    return { message: 'Product deleted successfully' };
  }
}
