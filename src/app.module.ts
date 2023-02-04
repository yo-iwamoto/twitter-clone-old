import { PrismaModule } from './prisma/prisma.module';
import { TweetsModule } from './tweets/tweets.module';
import { ConfigModule } from '@nestjs/config';
import { Module } from '@nestjs/common';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    PrismaModule,
    TweetsModule,
  ],
})
export class AppModule {}
