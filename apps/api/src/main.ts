import { AppModule } from './app.module';
import { setupSwagger } from './common/lib/swagger';
import { NestFactory } from '@nestjs/core';
import { FastifyAdapter } from '@nestjs/platform-fastify';
import type { NestFastifyApplication } from '@nestjs/platform-fastify';

async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(AppModule, new FastifyAdapter(), {
    cors: {
      origin: process.env.FRONTEND_URL,
      credentials: true,
      methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'],
    },
  });

  if (process.env.NODE_ENV === 'development') {
    setupSwagger(app);
  }

  await app.listen(8000);
}

bootstrap();
