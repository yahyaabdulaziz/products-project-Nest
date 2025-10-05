import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { User } from './entities/user.entity';
import { JwtStrategy } from './strategies/jwt.strategy';
import { LocalStrategy } from './strategies/local.strategy';

@Module({
  imports: [
    TypeOrmModule.forFeature([User]),
    PassportModule,
    JwtModule.register({
      secret: 'c1dc0b1784941e62fc6d96318798f8d3aa79aaf397ad5b6fa96a50c4adac0c68',
      signOptions: { expiresIn: '24h' },
    }),
  ],
  controllers: [UsersController, AuthController],
  providers: [UsersService, AuthService, JwtStrategy, LocalStrategy],
  exports: [UsersService, AuthService],
})
export class UsersModule {}
