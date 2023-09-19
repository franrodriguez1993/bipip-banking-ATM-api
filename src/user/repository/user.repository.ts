import Address from '../entities/address.entity';
import User from '../entities/user.entity';

export default class UserRepository {
  /**  GET USER BY ID  **/
  async getById(id: string) {
    return await User.findOne({
      where: { id },
      attributes: { exclude: ['createdAt', 'updatedAt', 'deletedAt'] },
      include: [
        {
          model: Address,
          attributes: {
            exclude: ['id_user', 'createdAt', 'updatedAt', 'deletedAt'],
          },
        },
      ],
    });
  }

  /**  GET ALL USERS   **/
  async getAll() {
    return await User.findAll({
      attributes: { exclude: ['createdAt', 'updatedAt', 'deletedAt'] },
      include: [
        {
          model: Address,
          attributes: {
            exclude: ['id_user', 'createdAt', 'updatedAt', 'deletedAt'],
          },
        },
      ],
    });
  }
}
