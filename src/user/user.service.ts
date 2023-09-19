import { Injectable, NotFoundException } from '@nestjs/common';
import UserRepository from './repository/user.repository';
import User from './entities/user.entity';

@Injectable()
export class UserService {
  constructor(private readonly userRepository: UserRepository) {}

  async findOne(id: string): Promise<User> {
    const user = await this.userRepository.getById(id);
    if (!user) throw new NotFoundException('User not found');
    return user;
  }
}
