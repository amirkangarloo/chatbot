import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger, VersioningType } from '@nestjs/common';
import { buildSwaggerDocument } from 'src/utility';
import { applicationConstants } from 'src/constant';

async function bootstrap() {
  const port = parseInt(process.env.APP_PORT, 10) || applicationConstants.DEFAULT_PORT;
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  app.setGlobalPrefix(applicationConstants.GLOBAL_API_PREFIX);
  app.enableVersioning({ type: VersioningType.URI });
  buildSwaggerDocument(app);

  await app.listen(port);

  Logger.log(`Server running on port: ${port}`);
}
bootstrap();
