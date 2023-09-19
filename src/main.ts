import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { environmentVariables } from './common/config/environment.variables';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.setGlobalPrefix('api/v1');
  await app.listen(environmentVariables.port);
}
bootstrap();
