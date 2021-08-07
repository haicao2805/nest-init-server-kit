import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { User } from './user/entity/user.entity';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';

const Config = ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: `./config/.env.${process.env.NODE_ENV}`,
});

const DBConfig = TypeOrmModule.forRoot({
      type: 'mongodb',
      url: `${process.env.DB_URL}/${process.env.DB_DATABASE_NAME}`,
      synchronize: true,
      keepConnectionAlive: true,
      entities: [User],
      useUnifiedTopology: true,
      extra: { connectionLimt: 1 },
});

@Module({
      imports: [Config, DBConfig, UserModule, AuthModule],
      controllers: [AppController],
      providers: [AppService],
})
export class AppModule {}
