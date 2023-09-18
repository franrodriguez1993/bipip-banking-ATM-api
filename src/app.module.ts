import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { sequelizeProviders } from './common/database/sequelize.providers';

@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true })],
  controllers: [AppController],
  providers: [AppService, ...sequelizeProviders],
  exports: [...sequelizeProviders],
})
export class AppModule {}
