import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { ProductsModule } from './products/products.module';
import { dataSourceOptions } from '../db/data_source';

@Module({
  imports: [
    UsersModule,
    ProductsModule,
    TypeOrmModule.forRoot({
      ...dataSourceOptions,
      autoLoadEntities: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

// local Db
// {
//       type: 'mariadb',
//       host: '127.0.0.1',
//       port: 3306,
//       username: 'root',
//       password: '',
//       database: 'products',
//       entities: ['dist/**/*.entity.js'],
//       synchronize: true,
//     }
