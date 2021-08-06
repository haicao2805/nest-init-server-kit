import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';

const Config = ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: `./config/.env.${process.env.NODE_ENV}`,
});

const DBConfig = TypeOrmModule.forRoot({
      type: 'mongodb',
      url: `${process.env.DB_URL}/${process.env.DB_DATABASE_NAME}`,
      synchronize: true,
      keepConnectionAlive: true,
      entities: [],
      extra: { connectionLimt: 1 },
});

@Module({
      imports: [Config, DBConfig],
      controllers: [AppController],
      providers: [AppService],
})
export class AppModule {}
