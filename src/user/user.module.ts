import { Module } from '@nestjs/common';

import UserRepository from './repository/user.repository';
import FindOneUserService from './services/FindOne-user';

@Module({
  controllers: [],
  providers: [FindOneUserService, UserRepository],
  exports: [FindOneUserService],
})
export class UserModule {}
