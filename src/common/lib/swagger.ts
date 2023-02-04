import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { dump } from 'js-yaml';
import { writeFileSync } from 'node:fs';
import type { NestFastifyApplication } from '@nestjs/platform-fastify';

export const setupSwagger = (app: NestFastifyApplication) => {
  const swaggerConfig = new DocumentBuilder().setTitle('nestjs-api').setVersion('0.0.1').build();
  const document = SwaggerModule.createDocument(app, swaggerConfig);
  writeFileSync('./openapi.yml', dump(document));
  SwaggerModule.setup('docs', app, document);
};
