import { PrismaModule } from './prisma/prisma.module';
import { TaskModule } from './task/task.module';
import { ConfigModule } from '@nestjs/config';
import { Module } from '@nestjs/common';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    PrismaModule,
    TaskModule,
  ],
})
export class AppModule {}
