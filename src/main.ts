import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';
import { buildSwaggerDocument } from 'src/utility';
import { applicationConstants } from 'src/constant';

async function bootstrap() {
  const port = applicationConstants.PORT;
  const app = await NestFactory.create(AppModule);
  buildSwaggerDocument(app);

  await app.listen(port);

  Logger.log(`Server running on port: ${port}`);
}
bootstrap();
