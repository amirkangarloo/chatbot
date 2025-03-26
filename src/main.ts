import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';
import { configuration } from "./config";

async function bootstrap() {
  const port = configuration.appPort;
  const app = await NestFactory.create(AppModule);

  await app.listen(port);

  Logger.log(`Server running on port: ${port}`);
}
bootstrap();
