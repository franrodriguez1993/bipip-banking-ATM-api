import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { environmentVariables } from './common/config/environment.variables';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.setGlobalPrefix('api/v1');

  //validations:
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
    }),
  );

  await app.listen(environmentVariables.port);
}
bootstrap();
