import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { JwtService } from '@nestjs/jwt';

@Module({
      controllers: [AuthController],
      providers: [
            AuthService,
            {
                  provide: JwtService,
                  useFactory: () => {
                        return new JwtService({ secret: process.env.JWT_SECRET });
                  },
            },
      ],
})
export class AuthModule {}
