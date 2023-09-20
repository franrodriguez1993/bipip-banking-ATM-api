import { Inject, Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import {
  sequelizeProviders,
  setupSequelize,
} from './common/database/sequelize.providers';
import { UserModule } from './user/user.module';
import { Sequelize } from 'sequelize-typescript';
import { AccountModule } from './account/account.module';
import { CreditcardModule } from './creditcard/creditcard.module';

@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true }), UserModule, AccountModule, CreditcardModule],
  controllers: [AppController],
  providers: [AppService, ...sequelizeProviders],
  exports: [...sequelizeProviders],
})
export class AppModule {
  constructor(@Inject('SEQUELIZE') private sequelize: Sequelize) {
    setupSequelize(sequelize);
  }
}
