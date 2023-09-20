import { Injectable, NotFoundException } from '@nestjs/common';
import UserRepository from '../repository/user.repository';
import User from '../entities/user.entity';

@Injectable()
export default class FindOneUserService {
  constructor(private readonly userRepository: UserRepository) {}

  async run(id: string): Promise<User> {
    const user = await this.userRepository.getById(id);
    if (!user) throw new NotFoundException('User not found');
    return user;
  }
}
